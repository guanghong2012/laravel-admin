/**
 * 商品分类对象
 *
 * @constructor
 * @author yangyifan <yangyifanphp@gmail.com>
 */
function Categry()
{
    //初始化
    this.__construct();
}

/**
 * 初始化
 *
 * @private
 * @author yangyifan <yangyifanphp@gmail.com>
 */
Categry.prototype.__construct = function ()
{
}

/**
 * 拉取微店分类
 *
 * @author yangyifan <yangyifanphp@gmail.com>
 */
Categry.prototype.pullWeidianCategory = function(url)
{
    //开启按钮动画
    base.tools.startButtonAnmate();
    this.send(url);
}

/**
 * 同步微店分类
 *
 * @author yangyifan <yangyifanphp@gmail.com>
 */
Categry.prototype.syncWeidianCategory = function(url)
{
    //开启按钮动画
    base.tools.startButtonAnmate();
    this.send(url);
}

/**
 * 删除微店分类
 *
 * @author yangyifan <yangyifanphp@gmail.com>
 */
Categry.prototype.deleteCategory = function(url, category_id)
{
    //开启按钮动画
    base.tools.startButtonAnmate();
    var _this = this;

    if ( category_id > 0 ) {
        layer.config({
            area:['100px', '180px'],
        });

        //询问框
        layer.confirm('是否删除商品分类', {
            btn: ['是', '否'] //按钮
        }, function(){
            _this.send(url, {id : category_id});
            layer.closeAll();
            window.location.reload();
        }, function(){

        });
    } else {
        base.tools.stopButtonAnmate();
    }
}

/**
 * 发送数据
 *
 * @param url       url
 * @param params    参数
 * @author yangyifan <yangyifanphp@gmail.com>
 */
Categry.prototype.send = function (url, params) {

    params = params || {};

    $.ajax({
        url         : url,
        type        : 'POST',
        data        : params,
        async       : false,
        dataType    : 'json',
        success     : function (data) {
            base.tools.parseResponseJson(data);
            base.tools.stopButtonAnmate();
        }
    })
}

var category = new Categry();