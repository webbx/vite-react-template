import React from 'react';
import { Button } from 'antd';
import DefineComponents from '/components/';

function App() {

    return (
        <div className="App">
            hello，this is a vite react demo
			<br/>
			{<Button>你好,我是Ant Design的Button组件</Button>}
			<DefineComponents/>
        </div>
    )
}

export default App;
