-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-02-28 14:22:38
-- 服务器版本： 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phplesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL,
  `newstype` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`, `newstype`) VALUES
(1, '习近平：深入扎实抓好改革落实工作', '1.jpg', '习近平强调，各地区各部门要牢固树立全局意识、责任意识，把抓改革作为一项重大政治责任，坚定改革决...', '2016-02-25', '1'),
(2, '皇道兵变80年：昭和维新の歌', '2.jpg', '有别于先前数次类似的青年军官刺杀政府要员的从轻发落判例，二二六事件中的主谋起事者多被判处重刑。', '2016-02-26', '1'),
(3, '大热门未必稳胜', '3.jpg', '外援将起决定性的作用——新疆队看布莱切能否稳定发挥、小外援能否不拖后腿；四川队看三外援能否继续...', '2016-02-26', '1'),
(4, '《女医明妃传》顾艳黄轩再续前世母子缘', '4.jpg', '该剧热度持续飙升，华策星之演员顾艳也加盟该剧，饰演宣宗废后静慈师太，与饰演宣宗次子的黄轩穿越时...', '2016-02-26', '1'),
(5, '民房半夜遭强拆 老人梦中受伤', '5.jpg', '前天晚上，他公司的两层办公楼被人强拆了，家具家电办公用品都被砸在了里面，而且和他一样遭遇强拆的...', '0000-00-00', '1'),
(6, '外交部答“南海是否设防空区”', '6.jpg', '核心事实外交部发言人洪磊：至于是不是设立防空识别区，那主要看形势的发展。', '2016-02-26', '2'),
(7, '日本自卫队再征船员 二战悲剧恐重演', '7.jpg', '由于船员人数不足，日本海上自卫队还将修改预备自卫官制度，完全没有自卫队服役经验的船员在接受10...', '2016-02-27', '2'),
(8, '29日13时甘婷婷搜狐客户端聊《新萧十一郎》', '8.jpg', '由严屹宽、甘婷婷、李依晓主演的《新萧十一郎》正在北京卫视、广东卫视，搜狐视频同步播出。', '2016-02-27', '2'),
(9, '校园分期：原罪与扭曲', '9.jpg', '商业银行不再授信给大学生办信用卡，校园金融市场沉寂了许久。', '2016-02-28', '2'),
(10, '可穿戴机器人：让鼓手用三只手臂来演奏音乐', '10.jpg', '当鼓手敲打脚踏双面铜钹的时候，机器人手臂会敲打节奏镲，当鼓手变换到小鼓，机器', '2016-02-22', '2'),
(11, 'Uber中国内部不和高管频离职 业绩全靠补贴和打折', '11.jpg', '顶着明星光环的外资公司Uber，在中国却被爆出内部不和、中国区CEO人选迟迟不能确', '2016-02-24', '3'),
(12, '苹果谷歌进场，打响汽车行业攻守战', '12.jpg', '和IT企业预想的不同，已经超过百年的传统企业也可以创新。', '2016-02-10', '3'),
(13, '品牌电商何去何从？', '13.jpg', '刘强东亚布力论坛一席话，品牌商应该取消电商部门，业界不明觉厉。', '2016-02-29', '3'),
(14, '昔日辉煌与如今落寂，为何《魔兽争霸3》会走下坡路?', '14.jpg', '尽管现如今这款游戏正在慢慢淡出大众的视野，但是我们不得不承认这款游戏对于整个', '2016-02-26', '3'),
(15, '【中国新闻周刊】周杰：我不用表情包 那太low了', '15.jpg', '', '2016-02-05', '3'),
(16, '更进一步 美人鱼票房破30亿', '16.jpg', '《美人鱼》便以2.81亿的单日票房刷新由', '2016-02-26', '4'),
(17, '刘嘉玲轻描淡写回应与关之琳误会：暂不跟她联络', '17.jpg', '', '2016-02-18', '4'),
(18, '王心凌新歌MV造型撞脸萧亚轩 画烟熏妆眼神迷离(图)', '18.jpg', '', '2016-02-26', '4'),
(19, '男子辞职被索499万元 小伙伴都惊呆了！', '19.jpg', '', '2016-02-19', '4'),
(20, '情人分手费分期付 网友疑惑为何小三理直气壮狮子大张口', '20.jpg', '', '2016-02-12', '4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newstitle` (`newstitle`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=27;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
