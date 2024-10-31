/*
 * @Description: 萤火虫动画
 * @Author: zhangli
 * @Date: 2024-03-07 13:53:05
 * @LastEditTime: 2024-03-07 16:17:07
 */

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        //标准
        return getComputedStyle(obj)[attr];
    } else {
        //IE
        return obj.currentStyle[attr];
    }
}

function stepMove(obj, json, fn) {
    var speed = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bstop = true;
        for (var attr in json) {
            var currentValue = 0;
            if (attr === 'opacity') {
                currentValue = Math.round(getStyle(obj, attr) * 100);
            } else {
                currentValue = parseInt(getStyle(obj, attr));
            }
            speed = (json[attr] - currentValue) / 100;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (currentValue != json[attr]) {
                if (attr === 'opacity') {
                    obj.style.opacity = (currentValue + speed) / 100;
                    obj.style.filter = 'alpha(opacity:' + (currentValue + speed) + ')';
                } else {
                    obj.style[attr] = currentValue + speed + 'px';
                }
                bstop = false;
            }
        }
        if (bstop) {
            clearInterval(obj.timer);
            fn && fn();
        }
    }, 50);
}

function Firefly() {
    this.cw = document.documentElement.clientWidth;
    this.ch = document.documentElement.clientHeight;
}

//创建萤火虫实例
Firefly.prototype.createFirefly = function () {
    this.fire = document.createElement('div');
    this.fire.classList.add('firefly');
    this.fire.style.left = this.genRandomNum(0, this.cw - this.fire.offsetWidth) + 'px';
    this.fire.style.top = this.genRandomNum(0, this.ch - this.fire.offsetHeight) + 'px';
    document.body.appendChild(this.fire);
    this.fireFlying();
};

//图片运动
Firefly.prototype.fireFlying = function () {
    var _this = this;
    stepMove(
        this.fire,
        {
            left: this.genRandomNum(0, this.cw - this.fire.offsetWidth),
            top: this.genRandomNum(0, this.ch - this.fire.offsetHeight),
        },
        function () {
            _this.fireFlying();
        },
    );
};

//随机数
Firefly.prototype.genRandomNum = function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
};

if (document.documentElement.clientWidth >= 768 && !sessionStorage.getItem('isFirst')) {
    for (var i = 0; i < 30; i++) {
        new Firefly().createFirefly();
    }
    sessionStorage.setItem('isFirst', 'false');
}

if (window.location.pathname !== '/') {
    const fireFlys = document.querySelectorAll('.vp-blog-mask');
    fireFlys.forEach((fly) => {
        fly.style.visibility = 'visible';
    });
} else {
    const fireFlys = document.querySelectorAll('.vp-blog-mask');
    fireFlys.forEach((fly) => {
        fly.style.visibility = 'visible';
    });
}

window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('isFirst', '');
});

export default 1111;
