import ApolloClient, {createNetworkInterface} from 'apollo-client';
import gql from 'graphql-tag';
import {types} from 'mobx-state-tree';

const Activity = types.model("Activity", {
    id: types.identifier(),
    title: types.string,
});

const ActivityStore = types.model("ActivityStore", {
    activities: types.array(Activity),
    selected: types.array(types.string),
},
{
    loadActivities() {
        const client = new ApolloClient({
            networkInterface: createNetworkInterface({
                uri: 'http://172.22.10.241:8000/graphql?apikey=test',
            }),
        });

        client.query({
            query: gql`{
                activities {
                    items {
                        id
                        title
                    }
                }
            }`,
        }).then(this.updateActivities);
    },

    saveActivity(title) {
        const client = new ApolloClient({
            networkInterface: createNetworkInterface({
                uri: 'http://172.22.10.241:8000/graphql?apikey=test',
            }),
        });

        client.mutate({
            mutation: gql`mutation ActivityCreate($title: String) {
              activity: activityCreate(package: 1, title: $title) {
                id
                title
              }
            }`,
            variables: {
                title: title
            }
        }).then(this.addActivity);
    },

    removeSelected() {
        const client = new ApolloClient({
            networkInterface: createNetworkInterface({
                uri: 'http://172.22.10.241:8000/graphql?apikey=test',
            }),
        });

        this.selected.forEach((id) => {
            client.mutate({
                mutation: gql`mutation ActivityDelete($id: Int) {
                  activity: activityDelete(id: $id) {
                    id
                    title
                  }
                }`,
                variables: {
                    id: id
                }
            }).then(this.removeActivity);
        });
    },

    updateActivities(result) {
        result.data.activities.items.forEach((item) => {
            this.activities.push(item);
        });
    },

    addActivity(result) {
        this.activities.push(result.data.activity);
    },

    removeActivity(result) {
        console.log(result);
    },

    toggleSelected(id) {
        const index = this.selected.indexOf(id);
        if (index === -1) {
            this.selected.push(id);
        } else {
            this.selected.splice(index, 1);
        }
    }
});

export default ActivityStore;
