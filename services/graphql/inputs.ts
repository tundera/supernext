import { enumType, inputObjectType } from 'nexus'

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const StringFilter = inputObjectType({
  name: 'StringFilter',
  definition(t) {
    t.nonNull.string('contains')
    t.nonNull.string('endsWith')
    t.nonNull.string('equals')
    t.nonNull.string('gt')
    t.nonNull.string('gte')
    t.nonNull.list.nonNull.string('in')
    t.nonNull.string('lt')
    t.nonNull.string('lte')
    t.nonNull.list.nonNull.string('notIn')
    t.nonNull.string('startsWith')
  },
})

export const IntFilter = inputObjectType({
  name: 'IntFilter',
  definition(t) {
    t.nonNull.int('contains')
    t.nonNull.int('endsWith')
    t.nonNull.int('equals')
    t.nonNull.int('gt')
    t.nonNull.int('gte')
    t.nonNull.list.nonNull.int('in')
    t.nonNull.int('lt')
    t.nonNull.int('lte')
    t.nonNull.list.nonNull.int('notIn')
    t.nonNull.int('startsWith')
  },
})
