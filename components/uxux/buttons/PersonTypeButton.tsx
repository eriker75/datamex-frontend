import { FC, SetStateAction } from 'react'
import classNames from 'classnames';
import { UserTypes } from '@/contants/userTypes';

interface Props{
    text: string;
    type: UserTypes;
    baseType: UserTypes;
    setUserType: (value: SetStateAction<UserTypes>) => void
}

const PersonTypeButton: FC<Props> = ({text, type, baseType, setUserType}) => {

    return (
        <button 
            type="button"
            className={
                classNames('btn',
                    {'btn-dark': type === baseType},
                    {'btn-primary': type !== baseType}
                )
            }
            style={{"width":"200px"}}
            onClick={() => setUserType(baseType)}
        >{text}</button>
    )
}

export default PersonTypeButton