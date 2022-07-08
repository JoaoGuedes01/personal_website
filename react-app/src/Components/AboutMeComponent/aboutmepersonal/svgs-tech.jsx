import React from 'react'

const svgsInt = (props) => {
    return (
        <>
            {props.level == "full" &&
                <svg width="201" height="14" viewBox="0 0 201 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="13" transform="matrix(1 0 0 -1 0.724609 13.8232)" fill="black" />
                    <rect width="180" height="13" transform="matrix(1 0 0 -1 0.724609 13.8232)" fill="#6C63FF" />
                </svg>
            }

            {props.level == "semi-full" &&
                <svg width="201" height="14" viewBox="0 0 201 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="13" transform="matrix(1 0 0 -1 0.724609 13.8232)" fill="black" />
                    <rect width="160" height="13" transform="matrix(1 0 0 -1 0.724609 13.8232)" fill="#6C63FF" />
                </svg>
            }

            {props.level == "half" &&
                <svg width="201" height="14" viewBox="0 0 201 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="13" transform="matrix(1 0 0 -1 0.724609 13.8232)" fill="black" />
                    <rect width="100" height="13" transform="matrix(1 0 0 -1 0.724609 13.8232)" fill="#6C63FF" />
                </svg>
            }
        </>
    )
}

export default svgsInt