import React, { Component } from 'react';


// wrapping with a stateless component
// const withClassNew = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className} >
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// =============102 Ref API 1 =================
// wrapping with a stateful component
const withClassNew = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className} >
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }
}
// =============102 Ref API 1 =================
 
// // =============102 Ref API 2 =================
// const withClassNew = (WrappedComponent, className) => {
//     const WithClass = class extends Component {
//         render() {
//             return (
//                 <div className={className} >
//                     <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
//                 </div>
//             )
//         }
//     }

//     return React.forwardRef( (props, ref) => {
//         return <WithClass {...props} forwardedRef={ref} />
//     } );
// }
// // =============102 Ref API 2 =================

export default withClassNew;