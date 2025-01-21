type ChalkDefaultColor =
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'magenta'
    | 'cyan'
    | 'white';
type ChalkDefaultConf = Record<ChalkDefaultColor, string>;

type Level = 'log' | 'info' | 'event' | 'warn' | 'error';
type ChalkMsg = [string] | [Record<string, string>] | Array<[string, string]>;

export class Chalk<T extends Record<string, string> = ChalkDefaultConf> {
    public colorMap = new Map<keyof T | ChalkDefaultColor, string>();
    public levelCof = new Map<
        Level,
        {
            color: keyof T | ChalkDefaultColor;
            bgColor: keyof T | ChalkDefaultColor;
        }
    >();

    constructor(colors?: T) {
        // 初始化成员变量
        this._init();
        if (colors) {
            Object.keys(colors).forEach((key) => {
                this.colorMap.set(key, colors[key]);
            });
        }
    }

    // 配置不同级别的日志颜色
    setConf(
        type: Level,
        conf: {
            color: keyof T | ChalkDefaultColor;
            bgColor: keyof T | ChalkDefaultColor;
        },
    ) {
        if (type && conf) {
            this.levelCof.set(type, conf);
        }
    }

    /**
     *
     * @param msg
     *
     * string 'hello world'
     * object {hello: 'red', world: 'blue'}
     * array  ['hello', 'red'], ['world', 'blue']
     */
    log(...msg: ChalkMsg) {
        if (msg && msg.length) {
            if (Array.isArray(msg[0])) {
                this._resolveMsg('log', msg as Array<[string, string]>);
            } else if (typeof msg[0] === 'object') {
                this._resolveMsg('log', msg[0]);
            } else {
                this._resolveMsg('log', msg[0]);
            }
        }
    }

    _init() {
        // 初始化colorMap
        const defaultColors: Array<[ChalkDefaultColor, string]> = [
            ['black', '#00000'],
            ['red', '#FF0000'],
            ['green', '#008000'],
            ['yellow', '#FFFF00'],
            ['blue', '#0000FF'],
            ['magenta', '#FF00FF'],
            ['cyan', '#00FFFF'],
            ['white', '#FFFFFF'],
        ];
        defaultColors.forEach((item) => {
            this.colorMap.set(item[0], item[1]);
        });

        // 初始化levelCof
        const defaultLevelCof: Array<
            [Level, { color: ChalkDefaultColor; bgColor: ChalkDefaultColor }]
        > = [
            ['log', { color: 'black', bgColor: 'yellow' }],
            ['info', { color: 'blue', bgColor: 'yellow' }],
            ['event', { color: 'magenta', bgColor: 'yellow' }],
            ['warn', { color: 'cyan', bgColor: 'yellow' }],
            ['error', { color: 'red', bgColor: 'yellow' }],
        ];
        defaultLevelCof.forEach((item) => {
            this.levelCof.set(item[0], item[1]);
        });
    }

    _resolveMsg(
        type: 'log',
        msg: string | Record<string, string> | Array<[string, string]>,
    ) {}
}

const c = new Chalk({
    red: '12',
    sss: '121',
});
c.log({
    hello: 'red',
    world: 'blue',
});

// c.colorMap.get('');

c.setConf('error', {
    color: 'black',
    bgColor: 'black',
});
console.log(c);

console.error('%c123', 'color: red');
console.warn('%c123', 'color: red');
console.log('%c123', 'color: red');
