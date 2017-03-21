'use strict';

import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import Actions from './components/Actions';
import Dialog from './components/Dialog';
import Form from './components/Form';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div style={ {padding: '20px'} }>
        <h1>コンポーネント一覧</h1>

        <h2>Logo</h2>
        <div style={ {display: 'inline-block', background: 'purple'} }>
            <Logo />
        </div>

        <h2>Button</h2>
        <div>
            onClickが指定されたButton: <Button onClick={() => alert('click!')}> Click </Button>
        </div>
        <div>
            クラス名が指定されたButton: <Button className="custom"> Click </Button>
        </div>

        <h2>Suggest</h2>
        <div>
            <Suggest options={['eenie', 'meenie', 'miney', 'mo']} />
        </div>

        <h2>Rating</h2>
        <div>
            初期値無し: <Rating />
        </div>
        <div>
            初期値４: <Rating defaultValue={4} />
        </div>
        <div>
            最大値１１: <Rating max={11} />
        </div>
        <div>
            読み取り専用: <Rating readonly={true} defaultValue={3} />
        </div>

        <h2>FormInput</h2>
        <table>
            <tbody>
                <tr>
                    <td>単純な入力フィールド</td>
                    <td><FormInput /></td>
                </tr>
                <tr>
                    <td>デフォルト値</td>
                    <td><FormInput defaultValue="default desu" /></td>
                </tr>
                <tr>
                    <td>年の入力</td>
                    <td><FormInput type="year" /></td>
                </tr>
                <tr>
                    <td>評価</td>
                    <td><FormInput type="rating" defaultValue={4} /></td>
                </tr>
                <tr>
                    <td>入力候補の提示</td>
                    <td><FormInput type="suggest" options={['red', 'green', 'blue']} defaultValue="green" /></td>
                </tr>
                <tr>
                    <td>単純なテキストエリア</td>
                    <td><FormInput type="text" /></td>
                </tr>
            </tbody>
        </table>

        <h2>Form</h2>
        <Form
          fields={[
            {label: 'Rating', type: 'rating', id: 'rateme'},
            {label: 'Greetings', id: 'freetext'},
          ]}
          initialData={{rateme: 4, freetext: 'Hello'}} />

        <h2>Form readonly</h2>
        <Form
          fields={[
            {label: 'Rating', type: 'rating', id: 'rateme'},
            {label: 'Greetings', id: 'freetext'},
          ]}
          initialData={{rateme: 4, freetext: 'Hello'}}
          readonly={true} />

            <h2>Action</h2>
            <div>
                <Actions onAction={type => alert(type)} />
            </div>

            <h2>Dialog</h2>
            <div><Dialog
              header="Out of the box example"
              onAction={type => alert(type)}>
                Hello, dialog!
              </Dialog></div>
            <p>&nbsp;</p>
            <div><Dialog
                header="No cancel, custom button" 
                hasCancel={false}
                confirmLabel="Whatever"
                onAction={type => alert(type)}>
                Anything goes here, see: <Button>A button</Button>
                </Dialog></div>

        {/* その他のコンポーネントをここに追加 */}
    </div>,
    document.getElementById('pad')
)
