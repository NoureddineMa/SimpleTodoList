import React from 'react'
import Title from '../components/Title'
import Tasks from '../components/Tasks'
import Header from '../components/Header'

function todolist() {

    return (
        <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans ">
            <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div class="mb-4">
                    <Title title="ToDo List" />
                    <Header />
                </div>
                <div>
                    <Tasks />
                </div>
            </div>
        </div>
    )
}

export default todolist
