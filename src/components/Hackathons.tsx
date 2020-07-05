import React, { Component } from "react";

import { Container } from "reactstrap";
import "../assets/style/Hackathons.scss";

export class Hackathons extends Component {
  render() {
    return (
      <Container className="shadow-rounded">
        <div className="inside-div">
          <table>
            <thead style={{ fontWeight: 700, textAlign: "center" }}>
              <tr className="table-titles">
                <td>Hackathon</td>
                <td>Date</td>
                <td>Venue</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody style={{ textAlign: "left" }}>
              <tr>
                <td>
                  IncubateIND Innovation Series Hackathon Powered by Microsoft
                </td>
                <td>21-22 December, 2019</td>
                <td>Microsoft Gurgaon</td>
                <td>3rd Place Win</td>
              </tr>
              <tr>
                <td>Innovacer HackerCamp 2019</td>
                <td>15-16 December, 2019</td>
                <td>Innovaccer Noida</td>
                <td>Top 15</td>
              </tr>
              <tr>
                <td>h@ckGTBIT</td>
                <td>18-19 January, 2020</td>
                <td>GTBIT</td>
                <td>Title Winners</td>
              </tr>
              <tr>
                <td>hackVSIT</td>
                <td>31 Jan-1 Feb, 2020</td>
                <td>VIPS</td>
                <td>VoiceFlow and Azure winners</td>
              </tr>
              <tr>
                <td>iXi Hackathon</td>
                <td>3-4 Feb, 2020</td>
                <td>UIncept</td>
                <td>2nd Place Win</td>
              </tr>
              <tr>
                <td>Solve4Bharat by PanIIT</td>
                <td>28-29 Feb, 2020</td>
                <td>IISc Bangalore</td>
                <td>4th Place Win</td>
              </tr>
              <tr>
                <td>Facebook Augmented Reality Hackathon</td>
                <td>16 March, 2020</td>
                <td>Devpost</td>
                <td>Submitted</td>
              </tr>
              <tr>
                <td>Facebook Messaging Hackathon</td>
                <td>16 March, 2020</td>
                <td>Devpost</td>
                <td>Submitted</td>
              </tr>
              <tr>
                <td>Facebook Artificial Intelligence Hackathon</td>
                <td>16 March, 2020</td>
                <td>Devpost</td>
                <td>Submitted</td>
              </tr>
              <tr>
                <td>MishMash Hackathon by Skillenza</td>
                <td>31st March, 2020</td>
                <td>Skillenza</td>
                <td>Top 10 amongst 7700+ registrants</td>
              </tr>
              <tr>
                <td>CATHacks</td>
                <td>4-5 April, 2020</td>
                <td>Devpost</td>
                <td>Submitted - Favourable reviews by judges</td>
              </tr>
              <tr>
                <td>HackQuarantine</td>
                <td>21 March-13 April, 2020</td>
                <td>Devpost</td>
                <td>Submitted - Favourable reviews by judges and organizers</td>
              </tr>
              <tr>
                <td>HackOn</td>
                <td>11 April-19 April, 2020</td>
                <td>Devfolio</td>
                <td>Best Hack using Google Cloud</td>
              </tr>
              <tr>
                <td>HackInTine</td>
                <td>1 June-9 June, 2020</td>
                <td>Precisely</td>
                <td>Top 5 out of 34 teams</td>
              </tr>
              <tr>
                <td>EarthxHacks</td>
                <td>June, 2020</td>
                <td>Devpost</td>
                <td>Submitted</td>
              </tr>
              <tr>
                <td>Lensathon</td>
                <td>9 May-6 June, 2020</td>
                <td>Snapchat, Skillenza</td>
                <td>Submitted</td>
              </tr>
              <tr>
                <td>Hack the Northeast</td>
                <td>Jun 8 – 11, 2020</td>
                <td>Devpost</td>
                <td>1st Prize in Best Financial Empowerment Hack</td>
              </tr>
              <tr>
                <td>Dishathon</td>
                <td>Jun 19 - 21, 2020</td>
                <td>IncubateIND</td>
                <td>Grand Finalist : Top 10 out of 1000+ Teams</td>
              </tr>
              <tr>
                <td>HAccess</td>
                <td>June, 2020</td>
                <td>Devpost</td>
                <td>Submitted</td>
              </tr>
              <tr>
                <td>ThoughtWorks - The Social Hackathon</td>
                <td>27th June, 2020</td>
                <td>Thoughtworks Dare2Complete</td>
                <td>1st place Winner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
}

export default Hackathons;
