Сегодня документация без сваггера! (я так сказал >3)


### Ручки

1. Получение лучшего хода из FEN позиции
```
/api/bestmove/fen POST
```
```
{
    position: "8/5pk1/p4p1p/n1PB2P1/3b3P/P7/8/6K1 w - - 1 38"
}
```
2. Получение лучшего хода из pgn позиции
```
/api/bestmove/pgn POST
```
```
{
    position: "1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6 5. d3 Bc5"
}
```