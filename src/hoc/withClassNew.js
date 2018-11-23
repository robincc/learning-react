import React, { Component } from 'react';


// wrapping with a stateless component
// const withClassNew = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className} >
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// wrapping with a stateful component
const withClassNew = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className} >
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClassNew;