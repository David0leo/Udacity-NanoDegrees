import React from 'react'
import '../style/css/ReadableAppStyle.css'
import ReadableMainTitle from './ReadableMainTitle'
import ReadableCategoryNavPane from './ReadableCategoryNavPane'
import ReadableCategoryView from './ReadableCategoryView'

const MainView = ({  }) => {
  return (
    <div className="readable-main-view">
      <ReadableMainTitle></ReadableMainTitle>
      <div className="body-container">
        <div className="nav-container">
          <ReadableCategoryNavPane categories={['test', 'testing', 'testy']}></ReadableCategoryNavPane>
        </div>
        <div className="category-view-container">
          <ReadableCategoryView posts={[{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}]}></ReadableCategoryView>
        </div>
      </div>
      <div className="readable-main-footer"></div>
    </div>
  )
}

export default MainView