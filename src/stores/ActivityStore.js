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
                uri: 'http://172.22.8.206:8000/graphql?apikey=test',
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

    updateActivities(result) {
        result.data.activities.items.forEach((item) => {
            this.activities.push(item);
        });
    }
});

export default ActivityStore;
