import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Marketplace from './components/Marketplace'
import Poem from './components/Poem'
import BookDetails from './components/BookDetails'

const App=()=>(
        <>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/marketplace" component={Marketplace} />
                <Route exact path="/poem" component={Poem} />
                <Route exact path="/books/:id" component={BookDetails} />
            </Switch>
        </>
)
export default App