import asyncio


async def divide(a, b):
    return a / b


async def get_quotient_or_none(a, b):
    try:
        res = await divide(a, b)
    except ZeroDivisionError:
        return None
    else:
        return res


async def main():
    num_pairs = ((6, 2), (4, 0), (7, 3), (5, 0), (3, 3))
    for a, b in num_pairs:
        res = await get_quotient_or_none(a, b)
        print(f'await get_quotient_or_none({a}, {b}) = {res}')


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
    loop.close()
