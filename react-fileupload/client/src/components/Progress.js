import React from 'react'
import PropTypes from 'prop-types'

const Progress = ({percentage}) => {
    return (
        <div className="progress mt-3">
            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: `${percentage}%` }} >{ percentage}%</div>
</div>
    )
}

Progress.propTypes = {
    percentage:PropTypes.number.isRequired,
}

export default Progress
