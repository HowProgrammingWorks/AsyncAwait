import asyncio


async def inc(a):
    return a + 1


async def add(a, b):
    return a + b


async def avg(a, b):
    s = await add(a, b)
    return s / 2


class Person:
    def __init__(self, name):
        self.name = name

    async def split(self, sep=' '):
        return self.name.split(sep)


async def main():
    print('await inc(5) =', await inc(5))
    print('await add(2, 3) =', await add(2, 3))
    print('await avg(8, 3) =', await avg(8, 3))

    person = Person('julio cesar chavez')
    print('await person.split() =', await person.split())


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
    loop.close()
