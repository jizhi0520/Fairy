作者：Koolson

Github: https://github.com/Koolson/Qure/tree/master/IconSet

## 使用说明
### 方式对比
| 方式 | 添加图标 | 更新图标 | 图标维护 | 获取及时性 | 操作便利性 | 
| :---: | :---: | :---: | :---: | :---: | :---: |
| 远程图标 | 编辑配置 | 清理缓存 | 图标作者 | ✅ | ✅ |
| 本地图标 | 编辑配置+文件操作 | 文件操作 | 用户本人 | ❌ | ❌|

### 方式一：远程图标<br>
*跨设备同步策略组图标，及时获取图标更新*<br>
*该操作以 Quantumult X v1.0.8-build249 为例*<br>
1. 在 Quantumult X 的“配置文件-编辑”中找到[policy]下的策略组字段，并在该策略组的最后一个节点后方加上：<br>
`img-url=https://raw.githubusercontent.com/jizhi07/SY/master/QuantumultX/icon/policy_icon/文件名.png`<br>
例如：<br>
`static=Hong Kong, 🇭🇰01, img-url=https://raw.githubusercontent.com/jizhi07/SY/master/QuantumultX/icon/policy_icon/文件名.png`<br>

```ruby
注意：此处“img”前的英文逗号和空格以及“Hong_Kong.png”图标名称中的下划短横线和字母大小写
```

2. 重启 Quantumult X 即可见到效果。<br>

><font color=red>更新方法：当远程图标更新时，请手动清理本地图标缓存(打开“文件”应用，依次进入“**我的 iPhone 或 iCloud Drive-Quantumult X-Images**”，删除Images文件夹内所有缓存文件)，并重启 Quantumult X，远程图标会重新下载并生效。</font>

[查看大图](https://raw.githubusercontent.com/jizhi07/SY/master/QuantumultX/image/Remote_Icon.png)<br>
![Image text]https://raw.githubusercontent.com/jizhi07/SY/master/QuantumultX/image/Remote_Icon.png)

### 方式二：本地图标<br>
*不支持多设备同步图标；图标更新时，需要手动下载图标并进行本地替换操作*<br>
*该操作以 Quantumult X v1.0.0-build91 为例*<br>

1. 打开"文件"应用后，依次进入“我的 iPhone 或 iCloud Drive→Quantumult X→Images”；<br>
2. 将**个人设定**的策略组名称 **同名的.png** 图标文件(.png图标文件可在 [IconSet 页面](https://github.com/Koolson/Qure/tree/master/IconSet)根据个人需求自行下载)粘贴到 Images 文件夹内，重启 Quantumult X 即可见到效果。<br>
 [查看大图](https://raw.githubusercontent.com/jizhi07/SY/master/QuantumultX/image/Local_Icon.png)<br>
![Image text](https://raw.githubusercontent.com/jizhi07/SY/master/QuantumultX/image/Local_Icon.png)

## 补充说明
1. 归档图标：图标默认不展示，但仍支持订阅；具体可查看 [归档图标预览](https://raw.githubusercontent.com/jizhi07/SY/master/QuantumultX/image/Policy_Preview_Archived.png) 及归档图标名称；<br>
2. 需要新增策略图标，请提 Issues 或 Telegram 中说明图标名称并附上相关图标资源链接；<br>


## 效果图预览
[查看大图](https://github.com/jizhi07/SY/raw/master/QuantumultX/image/Policy_Preview_All.png)<br>
![Image text](https://github.com/jizhi07/SY/raw/master/QuantumultX/image/Policy_Preview_All.png)
