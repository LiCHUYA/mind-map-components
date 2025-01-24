import React from 'react'

const containerStyle = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
}

const contentStyle = {
  flex: 1,
  width: '100%',
  height: '100%',
  border: 'none'
}

const ViewDist = ({ 
  useIframe = true,
  url = 'https://lichuya.github.io/vue3-mindmap/',
  content = ''
}) => {
  return (
    <div style={containerStyle}>
      {useIframe ? (
        <iframe
          src={url}
          frameBorder="0" 
          style={contentStyle}
        />
      ) : (
        <div 
          style={contentStyle}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  )
}

export default ViewDist 