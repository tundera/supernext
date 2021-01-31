import { stringArg, extendType, nonNull } from 'nexus'
import { compare, hash } from 'bcrypt'
import { generateAccessToken } from '../../helpers'

export const user = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, { name, email, password }, ctx) {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        })

        const accessToken = generateAccessToken(user.id)
        return {
          accessToken,
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, { email, password }, ctx) {
        const user = await ctx.prisma.user.findUnique({
          where: {
            email,
          },
        })

        const passwordValid = await compare(password, user?.password as string)

        const accessToken = generateAccessToken(user?.id as number)
        return {
          accessToken,
          user,
        }
      },
    })
  },
})
