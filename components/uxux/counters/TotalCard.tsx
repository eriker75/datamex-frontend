import React, { FC } from 'react'
import { Col } from 'react-bootstrap'
import { useSpring, animated } from '@react-spring/web';

export interface Props{
    n: number;
    title: string;
}

const TotalCard: FC<Props> = ({ n, title }) => {
    const { number } = useSpring({
        from: { number: 0}, 
        number: n,
        delay: 0,
        config: { mass: 1, tension: 20, friction: 10}
    });

    return (
        <Col className='d-flex justify-content-center'>
            <div 
                style={{height: '150px'}}
                className='h1 rounded-3 text-white bold bg-primary flex align-items justify-content w-100 text-center'>
                <animated.div>
                    {number.to((n) => n.toFixed(0))}
                </animated.div>
                {title}
            </div>
        </Col>
    )
}

export { TotalCard };