import React from 'react';
import Branch from '../../assets/abtractBranch.png';
import Account from '../../assets/abractManage.png';
import Teams from "../../assets/abtractTeams.png";
import Billing from "../../assets/abtractBilling.png";
import Auth from "../../assets/abtractAuth.png";
import Help from "../../assets/AbtactSupp.png";

const data = {
    Branches: [
        {
            photo: Branch,
            name: "Branches",
            url: "/",
            description: "Abstract lets you manage, version, and document your designs in one place.",
        }
    ],
    Account: [
        {
            photo: Account,
            name: "Manage your account",
            url: "/",
            description: "Configure your account settings, such as your email, profile details, and password.",
        }
    ],
    Teams: [
        {
            photo: Teams,
            name: "Manage organizations, teams, and projects",
            url: "/",
            description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
        }
    ],
    Billing: [
        {
            photo: Billing,
            name: "Manage billing",
            url: "/",
            description: "Change subscriptions and payment details.",
        }
    ],
    Auth: [
        {
            photo: Auth,
            name: "Authenticate to Abstract",
            url: "/",
            description: "Set up andconfigure SSO, SCIM, and Just-in-Time provisioning.",
        }
    ],
    Help: [
        {
            photo: Help,
            name: "Abstract Support",
            url: "/",
            description: "Get in touch with a human.",
        }
    ]
}

export default data