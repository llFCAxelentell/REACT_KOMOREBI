
import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import theme from './components/theme/Theme';
import SidebarA from './components/sidebar/SidebarA';
import SidebarM from './components/sidebar/SidebarM';
import SidebarS from './components/sidebar/SidebarS';
import Search from './components/search/Search';
import Video from './components/search/Video';
import Survey from './components/survey/Survey';
import Tags from './components/tags/Tags';
import SupervisorForm from './components/bar/supervisorForm';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/agent" element={<SidebarA />}>
          <Route path="" element={<Search />}/>
          <Route path="video" element={<Video />}/>
          <Route path="survey" element={<Survey />}/>
        </Route>
        <Route path="/supervisor" element={<SidebarS />}>
          <Route path="" element={<Search />}/>
          <Route path="tags" element={<Tags/>}/>
          <Route path="user" element={<SupervisorForm />}/>
        </Route>
        <Route path="/manager" element={<SidebarM />}>
          <Route path="" element={<Search />}/> 
          <Route path="tags" element={<Tags/>}/>
          <Route path="user" element={<SupervisorForm />}/>
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>,
  

  document.getElementById("root")
);

