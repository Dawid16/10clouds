import {JOB_POSITION_TITLE, SEARCH_JOB_INPUT} from "../pageObjects/careersPage";
import {CAREERS_NAV_BUTTON} from "../pageObjects/mainPage";

describe('Careers page content tests', function() {

    const FILTER_POSITION = 'Automation'

    beforeEach(function () {
        cy
            .visit('')
            .clickOnElement(CAREERS_NAV_BUTTON)
    })

    it('displays 1 QA Automation Engineer position', function() {
        cy
            .getElementContainingText(JOB_POSITION_TITLE, 'QA Automation Engineer')
            .should('have.length', 1)
    })

    it(`filters ${FILTER_POSITION} positions`, function() {
        cy
            .typeToInput(SEARCH_JOB_INPUT, FILTER_POSITION)
            .validateEachElementContainsText(JOB_POSITION_TITLE, FILTER_POSITION)
    })
})
