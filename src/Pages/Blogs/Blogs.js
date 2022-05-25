import React from 'react';
import './Blog.css'
const Blogs = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl font-bold mb-8 mt-16'>Conceptual Question And Answer</h2>
            </div>
            <div className='blog'>

                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-xl font-medium bg-cyan-200">
                        How will you improve the performance of a React Application?
                    </div>
                    <div class="collapse-content ">

                        <h2 className='text-xl  mb-4'>For improving the performance of a react application.We can follow these:</h2>
                        <h2>1.Use a Production build before deployment.</h2>
                        <h2>2.Avoid Adding Extra Nodes to the DOM by using React. Fragment</h2>
                        <h2>3.Avoid Anonymous Functions</h2>
                        <h2>4.App’s loading time improvement by lazy loading</h2>
                        <h2>5.Immutable Data Structures</h2>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-xl font-medium ">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div class="collapse-content ">
                        <h2 className='text-xl  mb-4'>To properly manage  there are four main types of state in React apps:</h2>
                        <h2>1.URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state.</h2>
                        <h2>2.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</h2>
                        <h2>3.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</h2>
                        <h2>4.Local state is data we manage in one or another component.

                            Local state is most often managed in React using the useState hook.</h2>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-xl font-medium bg-cyan-200">
                        How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content ">
                        <h2>In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
                            We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
                            The object referenced by [[Prototype]] is called a “prototype”.
                            If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
                            Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
                            If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
                            The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.</h2>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-xl font-medium ">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </div>
                    <div class="collapse-content ">
                        <h2>If we use setState() directly then we will lose control of the state across all components.When you directly update the state, it does not change state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</h2>
                        <h2>setProducts() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.But set product=[...] does not able to do this.That's why we use setProducts </h2>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                    <div class="collapse-title text-xl font-medium bg-cyan-200">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content ">
                        <h2>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA Engineer </h2>
                        <h2>Unit testing provides numerous benefits including finding software bugs early, facilitating change, simplifying integration, providing a source of documentation, and many others</h2>
                        <h2>Unit testing provides these facilities:</h2>
                        <h2>1.Facilitates Changes and Simplifies Integration</h2>
                        <h2>2.Makes the Process Agile</h2>
                        <h2>3.Improving Quality of Code</h2>
                        <h2>4.Finds Software Bugs Early</h2>
                        <h2>5. Provides Documentation</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;