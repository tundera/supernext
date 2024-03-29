---
to: services/graphql/resolvers/<%= name %>.ts
---
<% camelized = h.inflection.camelize(name) -%>
<% plural = h.inflection.pluralize(camelized) -%>
import { objectType, extendType } from 'nexus';

// import { isAdmin } from '../services/permissions';

// <%= camelized %> Type
export const <%= camelized %> = objectType({
  name: '<%= camelized %>',
  description: 'A <%= camelized %>',
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

/*
// Enums
export const CallPreference = enumType({
  name: 'CallPreference',
  members: ['WEEKDAY', 'WEEKEND', 'WEEKNIGHT'],
});

// Queries
export const <%= camelized %>Queries = extendType({
  type: 'Query',
  definition: (t) => {
    // List <%= plural %> Query (admin only)
    t.crud.<%= plural.toLowerCase() %>({
      filtering: true,
      ordering: true,
      // use resolve for permission checks or to remove fields
      resolve: async (root, args, ctx, info, originalResolve) => {
        if (!isAdmin(ctx.user)) throw new ForbiddenError('Unauthorized');

        return await originalResolve(root, args, ctx, info);
      },
    });

    // Custom Query
    t.field('me', {
      type: 'User',
      description: 'Returns the currently logged in user',
      nullable: true,
      resolve: (_root, _args, ctx) => ctx.user,
    });

    t.list.field('availabilityForUser', {
      type: 'Event',
      description: 'Returns available time slots to schedule calls with an expert',
    })
  },
});

// Mutations
export const <%= camelized %>Mutations = extendType({
  type: 'Mutation',
  definition: (t) => {
  },
});
*/