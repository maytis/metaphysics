import _ from 'lodash';
import Artist from './artist';
import FeaturedLink from './featured_link';
import Gene from './gene';
import {
  GraphQLObjectType,
  GraphQLUnionType
} from 'graphql';

export let FeaturedLinkItemType = _.create(FeaturedLink.type, {
  name: 'FeaturedLinkItem',
  isTypeOf: ({ item_type }) => item_type === 'FeaturedLink'
});

export let ArtistItemType = _.create(Artist.type, {
  name: 'ArtistItem',
  isTypeOf: ({ item_type }) => item_type === 'Artist'
});

export let GeneItemType = _.create(Gene.type, {
  name: 'GeneItem',
  isTypeOf: ({ item_type }) => item_type === 'Gene'
});

export let ItemType = new GraphQLUnionType({
  name: 'Item',
  types: [
    ArtistItemType,
    FeaturedLinkItemType,
    GeneItemType
  ]
});

export default ItemType;