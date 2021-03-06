import { find } from 'lodash';
import { GraphQLString, GraphQLObjectType } from 'graphql';
import { params as genericGenes } from './add_generic_genes';
import Results from './results';
import Title from './title';
import Context from './context';
import Params from './params';

export const HomePageModulesType = new GraphQLObjectType({
  name: 'HomePageModules',
  fields: () => ({
    key: {
      type: GraphQLString,
    },
    display: {
      type: GraphQLString,
    },
    params: Params,
    context: Context,
    title: Title,
    results: Results,
  }),
});

const HomePageModule = {
  type: HomePageModulesType,
  description: 'Single module to show on the home screen',
  args: {
    key: {
      type: GraphQLString,
      description: 'Module key',
    },
    id: {
      type: GraphQLString,
      description: 'ID of generic gene rail to target',
    },
  },
  resolve: (root, { key, id }) => {
    // is id a generic gene?
    const params = find(genericGenes, ['id', id]);
    if (params) {
      return { key, params, display: true };
    }
    return { key, display: true };
  },
};

export default HomePageModule;
