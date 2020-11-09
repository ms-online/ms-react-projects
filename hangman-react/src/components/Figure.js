import React from 'react'

const Figure = () => {
    return (
        <>
        <svg height="250" width="200" className="figure-container">
            {/* <!-- 枝头 --> */}
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />
            {/* <!-- 头部 --> */}
            <circle cx="140" cy="70" r="20" className="figure-part" />
            {/* <!-- 身体 --> */}
            <line x1="140" y1="90" x2="140" y2="150" className="figure-part" />
            {/* <!-- 手臂 --> */}
            <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />
            <line x1="140" y1="120" x2="160" y2="100" className="figure-part" />
            {/* <!-- 双腿 --> */}
            <line x1="140" y1="150" x2="120" y2="180" className="figure-part" />
            <line x1="140" y1="150" x2="160" y2="180" className="figure-part" />
      </svg>
        </>
    )
}

export default Figure
