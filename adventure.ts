namespace SpriteKind {
    export const Dragonfly = SpriteKind.create()
}

namespace adventure {


    //%block
    //%blockId=adventureDie block="死去并且播放动画"
    export function die() {
        // 实现这个函数，做到播放动画完了再死去
    }

    //%block
    //%blockId=adventureDropAppleFromTree block="间隔一段时间掉苹果 %treeSprite=variables_get(mySprite)"
    export function dropAppleFromTree(treeSprite:Sprite) {
       // 实现这个函数，做到
       // 1. 每隔3秒掉一个苹果
       // 2. 树会提示苹果掉落的倒计时
    }

    //%block
    //%blockId=adventureChopTree block="砍树"
    export function chopTree() {
        // 实现这个函数，做到
        // 将角色所在位置的树砍掉
    }

    //%block
    //%blockId=adventureSpawnDragonfly block="在 %loaction=variables_get(location) 生成一秒后自动死亡的蜻蜓"
    export function spawnDragonfly(location : tiles.Location) {
        // 实现这个函数，做到
        // 生成一只一秒后自动死亡的蜻蜓
    }

    //%block
    //%blockId=adventureFreshDragonfly block="最新鲜的蜻蜓"
    export function freshDragonfly() : Sprite{
        // 实现这个函数，做到
        // 返回最晚生成的一只蜻蜓
        return null;
    }
}