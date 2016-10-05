# 学习点
## 关于media query和 cacl
```js
all:{
  margin: ' 2rem 0rem',
  flexBasis: '100%',
  '@media (min-width: 600px)': {
    flexBasis: 'calc(50% - 4rem)'
  }
}
```
1. media query需要用Radium才能使用 使用方法为export default Radium(Course)
2. calc是用来自适应的！超级好用

## props传数据好办法
好的写法
```js
//Courses.js
{courses.map((item,i) => {
  return(
    <Course key={i} course={item}/>
  )
})}
//Course.js
let course=this.props.course
return(
  <div style={styles.all}>
    <Card>
      <div style={styles.imgWrap}>
        <img src={course.image} alt={course.name} style={styles.img} />
      </div>
    </Card>
  </div>
)
```
在Course.js中是直接<Course key={i} course={item}/>把item全传到course里 再到Course.js中let course=this.props.course

坏的写法
```js
//Courses.js
{courses.map((item,i) => {
  return(
    <Course key={i} imgage={item.image} alt={item.name}/>
  )
})}
//Course.js
let course=this.props.course
return(
  <div style={styles.all}>
    <Card>
      <div style={styles.imgWrap}>
        <img src={course.image} alt={course.name} style={styles.img} />
      </div>
    </Card>
  </div>
)
```

## {courseId}=this.props.params和courseId=this.props.params;

第一个传过来的数据2，第二个是一个对象Object {courseId: "2"}

## svg宽度问题没解决

## constructor(props)什么时候写props
```js
constructor(props){
  super(props);
  this.state={
    likes:this.props.course.likes
  }
}
```
在设置state时会用到props时写

## 关于media query 我也会用啦～
```js
'@media (min-width: 600px) and (max-width:975px)': {
  flexBasis: 'calc(50% - 4rem)'
}
```
这样就会形成一个区间可以分多个宽度了

## material UI 的 svg icon
svg的大小由 宽高 决定，
显示的区域由viewBox ='0 0 24 24'  这个坐标来决定 代表从(0,0)点到 （24,24)点,这个显示部分不被宽高影响

##   background-size: contain 以及 pointer-events: none
background-size: contain; 将图片拓展到把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。
pointer-events: none; 顾名思意，就是鼠标事件拜拜的意思。元素应用了该CSS属性，链接啊，点击啊什么的都变成了“浮云牌酱油”。
