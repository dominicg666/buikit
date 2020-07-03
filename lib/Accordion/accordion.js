import React, { createContext, useContext } from 'react';
import { useAccordion } from '@baaz/adapter/lib/Accordion/useAccordion';
import  './accordion.scss';

const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = props => {
    const { canOpenMultiple = true, children } = props;

    // The talon is the source of truth for the context value.
    const talonProps = useAccordion({ canOpenMultiple, children });
    const { handleSectionToggle, openSectionIds } = talonProps;
    const contextValue = {
        handleSectionToggle,
        openSectionIds
    };

    return (
        <Provider value={contextValue}>
            <div className="accordian_root">{children}</div>
        </Provider>
    );
};

export default Accordion;

export const useAccordionContext = () => useContext(AccordionContext);
