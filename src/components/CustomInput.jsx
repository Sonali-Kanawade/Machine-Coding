import { forwardRef, useImperativeHandle, useRef } from "react";


const CustomInpunt = forwardRef((props, ref) => {
    const inputRef = useRef()
    
    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current.focus();
            },
            clear: () => {
                inputRef.current.value ='';
            }
        }
    })
    return (<div>
        <input placeholder="enter text" {...props} ref={inputRef} />
    </div>)
})

export default CustomInpunt;