import React, { Component } from 'react'
import Grid from "../components/Grid";
import NodeLegend from "../components/NodeLegend";
import Figure from "../components/Figure";

type Props = {
}

type State = {
  spoilersVisible: boolean,
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      spoilersVisible: false,
    }
  }

  // noinspection JSMethodCanBeStatic
  renderMainPost() {
    let spoilerOrNot;
    let showSpoilerButton;
    if (!this.state.spoilersVisible) {
      spoilerOrNot = "spoiler";
      // showSpoilerButton = <WidgetButton highlighted={false} onClick={() => { this.setState({criticalThresholdVisible: true}); } } >Show spoilers</WidgetButton>
    } else {
      spoilerOrNot = "spoiler-revealed";
      // showSpoilerButton = <WidgetButton highlighted={false} onClick={() => { this.setState({criticalThresholdVisible: false}); } } >Hide spoilers</WidgetButton>
    }
    showSpoilerButton = <label><span style={{ cursor: "pointer" }}><input type="checkbox" value={this.state.spoilersVisible} onChange={(e) => { this.setState({ spoilersVisible: e.target.checked }); }} /> Show spoilers</span></label>;


    let exposed_you = <code className="code-exposed">you</code>;

    let susceptible = <code className="code-susceptible">Susceptible</code>;
    let infected = <code className="code-infectious">Infected</code>;
    let recovered = <code className="code-removed">Recovered</code>;
    let dead = <code className="code-dead">Dead</code>;
    let selfQuarantined = <code className="code-quarantined">Self-quarantined</code>;

    // noinspection HtmlRequiredAltAttribute
    return (
      <div className="post-content">
        {/*<div>*/}
        {/*  Last year, I wrote a <a href="https://meltingasphalt.com/interactive/going-critical/">viral article about viral growth</a>.*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  It featured <strong>playable simulations</strong> of things that spread across a population. Things like viruses (yes), but also ideas, fashions, and other trends.*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  Today, in light of our current crisis, I wanted a chance to revisit these simulations. And you can play with them in just a moment. But first...*/}
        {/*</div>*/}
        <div>
          <h3>مدت زمان انتقال</h3>
        </div>
        <Figure>
          <Grid gridRows={25}
            gridCols={25}
            nodeSize={20}
            nug={1}
            randomSeed={100}
            personHours={4}
            showDaysPerStateControls={true}
            showInteractions={false}
            speed={0.4}
            transmissionProbability={1}
            travelRadius={1}
          />
        </Figure>
        <div>
        حتی وقتی این را می خوانید، ممکن است چنین فردی باشید
        </div>
        <div>
          <ul>
            <li><NodeLegend type="susceptible" /> &nbsp;<b>مستعد</b></li>
            <li><NodeLegend type="exposed" /> &nbsp;<b>بیمار بدون علائم</b></li>
            <li><NodeLegend type="infected" /> &nbsp;<b>بیمار با علائم</b></li>
            <li><NodeLegend type="removed" /> &nbsp;<b>بهبود یافته</b></li>
          </ul>
        </div>
        <div>
          <h3>Probabilistic infection</h3>
        </div>
        
        <Figure>
          <Grid gridRows={51}
            gridCols={51}
            maxTransmissionRate={1}
            nodeSize={10}
            nug={5}
            randomSeed={99}
            personHours={4}
            showDaysPerStateControls={true}
            showInteractions={false}
            showProTip={true}
            showTransmissionProbabilitySlider={true}
            speed={0.9}
            transmissionProbability={0.5}
            travelRadius={1}
          />
        </Figure>
        <div>
          <h3>Travel</h3>
        </div>
        <Figure>
          <Grid degree={24}
            gridRows={51}
            gridCols={51}
            maxTransmissionRate={1}
            nodeSize={10}
            nug={5}
            personHours={4}
            randomSeed={99}
            showAliveFraction={true}
            showInteractions={true}
            // showTransmissionProbabilitySlider={true}
            showTravelRadiusSlider={true}
            speed={0.8}
            travelRadius={15}
          />
        </Figure>
        <Figure>
          <Grid degree={24}
            gridRows={51}
            gridCols={51}
            personHours={20}
            nodeSize={10}
            nug={5}
            randomSeed={100}
            showAliveFraction={true}
            showInteractions={true}
            showPersonHoursSlider={true}
            showTransmissionProbabilitySlider={true}
            showTravelRadiusSlider={true}
            speed={0.8}
            transmissionProbability={0.3}
            travelRadius={10}
          />
        </Figure>
        {/*<div>*/}
        {/*  Here's another question you might try to answer: <em>For a fixed number of encounters (e.g., 5 per day), how much do you need to reduce the travel radius to keep the disease in check?</em>*/}
        {/*</div>*/}

      </div>
    );
  }

  renderSubscribeForm() {
    return (
      <form method="post" action="https://meltingasphalt.us8.list-manage.com/subscribe/post?u=0bc9d741e167733d20c520ea6&amp;id=57ebd9b4a6" id="mc4wp-form-1" className="form mc4wp-form"><input type="email" id="mc4wp_email" name="EMAIL" placeholder="Enter your email" required />
        <input type="submit" value="Subscribe" />
        <textarea name="_mc4wp_required_but_not_really" style={{ display: "none" }} /><input type="hidden" name="_mc4wp_form_submit" value="1" /><input type="hidden" name="_mc4wp_form_instance" value="1" /><input type="hidden" name="_mc4wp_form_nonce" value="8a45344b67" />
      </form>
    )
  }

  renderEndOfPostDivider(showTimestamp: boolean) {
    let timestamp = "";
    let divider = <span>——</span>;
    if (showTimestamp) {
      timestamp = "Originally published March 16, 2020.";
      divider = <img src="https://meltingasphalt.com/wp-content/themes/responsive/core/images/flourish.svg" width={50} alt="——" />;
    }

    return (
      <div style={{ textAlign: "center" }}>
        <div className="end-of-post-divider">
          {divider}
        </div>
        <div className="signature-line">
          {timestamp}
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <div id="header">
        <div id="logo" className="branded">
          <span className="site-name">
            <a href="https://meltingasphalt.com/" title="Melting Asphalt" rel="home">
              <img id="nav-logo" src="https://meltingasphalt.com/wp-content/themes/responsive/core/images/ma.svg" />
              &nbsp;&nbsp;Melting Asphalt
            </a>
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="main-container">
        <div className="header">
          {this.renderHeader()}
        </div>
        <div className="blank-l" />
        <div className="content">
          {this.renderMainPost()}
        </div>
        <div className="blank-r" />
        <div className="footer" />
      </div>
    );
  }
}

export default App
