<?php

// +----------------------------------------------------------------------
// | date: 2016-01-23
// +----------------------------------------------------------------------
// | ConfigControllerModel.php: 创建 Controller 配置文件模型
// +----------------------------------------------------------------------
// | Author: yangyifan <yangyifanphp@gmail.com>
// +----------------------------------------------------------------------

namespace Yangyifan\AutoBuild\Model\Config;

class ConfigControllerModel extends BaseModel
{

    const FILE_TYPE = 'controller';//对应 $type_arr 的类型

    /**
     * 组合创建 Controller 配置文件
     *
     * @param $data
     * @return mixed
     * @author yangyifan <yangyifanphp@gmail.com>
     */
    public static function getControllerConfig($data)
    {
        if (!empty($data)) {
            foreach ($data as &$v) {
                $v['is_list']   = $v['is_list'] == 1 ? true : false;
                $v['is_search'] = $v['is_search'] == 1 ? true : false;
            }
        }
        return $data;
    }
}

