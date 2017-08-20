import React from 'react'
import '../style/css/ReadableAppStyle.css'
import ReadableMainTitle from './ReadableMainTitle'
import ReadableCategoryNavPane from './ReadableCategoryNavPane'
import ReadableCategoryView from './ReadableCategoryView'

const MainView = ({  }) => {
  return (
    <div className="readable-main-view">
      <ReadableMainTitle></ReadableMainTitle>
      <ReadableCategoryNavPane categories={['test', 'testing', 'testy']}></ReadableCategoryNavPane>
      <ReadableCategoryView posts={[{id:1}, {id:2}, {id:3}]}></ReadableCategoryView>
    </div>
  )
}

export default MainView