import React from 'react'

const shop = async ({ params }) => {
    const { username } = await params

    return (
        <div>
            Hi iam {username}' shop
        </div>
    )
}

export default shop
