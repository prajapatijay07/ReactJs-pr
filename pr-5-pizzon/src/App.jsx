import React from 'react';
import PizzaMenu from './Components/Blog/PizzaMenu';
import PizzaSidebar from './Components/Blog/PizzaSidebar';
import PizzaSingleView from './Components/Blog/PizzaSingleView';
import PrevNextPost from './Components/Blog/PrevNextPost';
import CommentsSection from './Components/Blog/CommentsSection';
import PizzaCommentForm from './Components/Blog/PizzaCommentForm';
import Header from './Components/Blog/Header';
import ShopBanner from './Components/Blog/BlogHeroSection';
import Footer from './Components/Blog/Footer';

function App() {
  return (
    <>
    <Header/>
    <ShopBanner/>
      <div 
        className="d-flex flex-column flex-lg-row" 
        style={{ maxWidth: '1200px', margin: '2rem auto', gap: '2rem' }} 
      > 
        <div style={{ flex: '1 1 65%' }}>
          <PizzaMenu />
        </div>
        <div style={{ flex: '1 1 35%' }}>
          <PizzaSidebar />
        </div>
      </div>

      <div>
        <PizzaSingleView />
        <PrevNextPost/>
        <CommentsSection/>
        <PizzaCommentForm />
      </div>
      <Footer/>
    </>
  );
}

export default App;
