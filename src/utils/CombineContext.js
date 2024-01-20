import React from 'react';

export const CombineComponents = (...components) => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) => {
            return function({ children }) {
                return (
                <AccumulatedComponents>
                    <CurrentComponent>{children}</CurrentComponent>
                </AccumulatedComponents>
                );
            };
        },
        
        function({ children }) { return <>{children}</>; },
    );
};
