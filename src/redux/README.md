### 一、步驟
+ 1、npm install --save redux
+ 2、npm install --save react-redux(连接Store与应用)
    + 1、react-redux包输出一个Provider的组件，该组件是存储可以使用我们的应用中的所有容器组件，而无需我们每次都需要收到传递它。

### 二、配置和設置
+ 1、定义规约 
+ 2、创建Store 
+ 3、创建动作创造者 
+ 4、将Store与我们的React联系起来
+ 5、工作 

### 三、添加Redux
+ 1、写一个根规约器：reducers.js,第二个参数是动作(action),归约必须返回一个状态, 所以在默认情况下, 最起码确保返回当前状态。
+ 2、写actionCreators
+ 3、配置存储(configureStors.js)、rootReducer和应用
    + 1、redux包输出一个createStore的函数，为应用创建实际存储区
    + 2、createStore 函数要求我们将 rootReducer 作为第一个参数来传递。它还希望将初始状态作为第二个参数传递。我们将从我们创建的reducers.js 文件中到入值。
    + 3、通过调用configureStore()函数来创建Store更新根Root.js
+ 4、将试图连接到actionCreators
    + 1、react-redux包提供了一个connect()函数，将状态树绑定到不同的组件
    + 2、connect() 函数返回一个函数, 它期望第一参数是一个组件。这通常叫做高阶组件
    + 3、connect() 函数要求我们在函数中至少传递一个参数 (但通常我们会传递两个)。它所期望的第一个参数是一个函数, 它将被称为state 并期望一个返回的对象将数据连接到视图,我们将这个函数称为mapStateToProps 函数。因为它的责任是将状态映射到与组件的原始props合并的对象。
    + 4、如：在Header.jsx中创建视图，并使用connect函数来绑定currentTime在我们的状态树中的值，此connect()函数自动将函数的第一个参数中的任何键传递为Home 组件的props


### 四、Redux动作（触发更新）
+ 1、创建一个actionCreator来分发Store的动作
+ 2、调用一个元素的actionCreator，如：onClick
+ 3、处理规约器动作
    1、connect() 函数接受第二个参数, 这使得我们也可以将函数映射到属性。它被调用的dispatch() 函数, 所以在这里我们可以 绑定 函数以便在store调用dispatch()，如：Home.js内的mapDispatchToProps

+ 4、redux 使用combineReducers() 导出, 以组成一个对象的归约器函数。对于每个触发的动作, 将使用相应的动作调用每个函数
