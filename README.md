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
