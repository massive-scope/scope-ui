import ApolloClient, {createNetworkInterface} from 'apollo-client';
import gql from 'graphql-tag';
import {types} from 'mobx-state-tree';

const Activity = types.model("Activity", {
    id: types.identifier(),
    title: types.string,
});

const ActivityStore = types.model("ActivityStore", {
    activities: types.array(Activity),
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

    updateActivities(result) {
        result.data.activities.items.forEach((item) => {
            this.activities.push(item);
        });
    },

    addActivity(result) {
        this.activities.push(result.data.activity);
    }
});

export default ActivityStore;
