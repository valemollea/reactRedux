import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamLists from './streams/StreamLists';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={StreamLists} />
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/edit/:id" exact component={StreamEdit}/>
          <Route path="/streams/delete/:id" exact component={StreamDelete}/>
          <Route path="/streams/show" exact component={StreamShow}/>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
