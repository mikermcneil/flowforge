#### 1.0.1: Release

 - Fix flow import (#1157) @knolleary

#### 1.0.0: Release

 - Update mosquitto docs and add placeholder to platform yml (#1152) @knolleary
 - Fix template create and edit (#1151) @Steve-Mcl
 - Ensure that changes to stack are immediately recorded (#1150) @Pezmc
 - Ensure email is uri encoded when sent in sign-up invitation email (#1147) @knolleary
 - Ensure entityId is a string in AuditLog query (#1146) @knolleary
 - Replace redundant <form> tags with <div>s (#1144) @joepavitt
 - Update forge-ui-components (#1139) @Pezmc
 - Have Admin view use Stack labels (#1140) @hardillb
 - Show project template (if present) (#1142) @Steve-Mcl
 - Update FormRow styling for disabled state in Project Settings (#1135) @joepavitt
 - Allow device to subscribe to all-project broadcast (#1141) @knolleary
 - Redirect user to full URL they were accessing before being asked to login (#1138) @knolleary
 - Add warning on Palette Modules settings if launcher detected as old (#1136) @knolleary
 - Add missing guard for user id on audit log entry (#1132) @Steve-Mcl
 - Ensure page polls status when "installing" state (#1131) @Steve-Mcl
 - Anon fcn re-writes (#1130) @joepavitt
 - Fix vue router warning on invalid params (#1129) @knolleary
 - Disable the start button for projects running or changing state (#1125) @Pezmc
 - Ensure built-in modules are not listed in project modules (#1124) @knolleary
 - Add an installing state to projects (#1123) @hardillb
 - Standardize 404 response format (#1115) @knolleary
 - Add platform logging and view (#1084) @Steve-Mcl
 - Fix users frontend unit test (#1122) @knolleary
 - Resend verify email when an admin un-verifies a user (#1120) @Steve-Mcl
 - Fix alignment of single letter avatar (#1117) @Steve-Mcl
 - Update README.md (#1108) @robmarcer
 - Fix merge conflict error (#1119) @knolleary
 - add platform env vars for devices (#1039) @Steve-Mcl
 - show proj suspend/delete dialog direct from menu (#1106) @Steve-Mcl
 - Add backend search to Admin Users/Teams tables (#1110) @knolleary
 - Consistent Menu Item pointers (#1114) @Steve-Mcl
 - Update dependencies (#1111) @knolleary
 - Remove the devices feature flag (#1101) @Pezmc
 - Only create personal team on first verify (#1109) @hardillb
 - Adds query capability to all paginated apis (#1104) @knolleary
 - Added limits to admin panel (#1082) @Jozefik
 - Update README.md (#1105) @robmarcer
 - Allow Flows/Credential to be imported to a project (#1056) @hardillb
 - Add project name to docker-compose up (#1066) @hardillb
 - Add palette.modules to Project Settings (#1090) @knolleary
 - Stack label (redo of 1088) (#1103) @hardillb
 - Scope the E2E auth tests to be slightly more specific (#1097) @Pezmc
 - Update eslint and fixup errors (#1099) @knolleary
 - improve UI/UX around new/edit admin templates (#1068) @Steve-Mcl
 - Implement FormRow.focus and fix focus throughout the app (#1092) @Pezmc
 - Bump ui-components library (#1095) @Pezmc
 - Remove the edit project name page (#1091) @Pezmc
 - Move tests into groups based on app section (#1093) @Pezmc
 - Upgrade actions to drop NodeJS v12 (#1089) @hardillb
 - Explain what FlowForge offers over Node-RED in the README.md (#1060) @robmarcer
 - Update K8s Stack creation doc (#1087) @hardillb
 - Update Docker Stack docs to NR 3.0.2 (#1086) @hardillb
 - Update NR version in the stack docs (#1085) @hardillb
 - Hide the projects stats if empty or undefined (#1080) @Pezmc
 - Catch any unhandled XHR errors that bubble up to the view (#1079) @Pezmc
 - Update Docker README.md (#1069) @robmarcer
 - add manual step (verify page) between email and verification API call (#1037) @Steve-Mcl
 - Fix intermittently failing async project creation test (#1063) @Pezmc
 - E2E Coverage of Platform Admins viewing teams/projects/devices (#1062) @Pezmc
 - Set project.url in the stub driver (#1061) @Pezmc
 - Hide editor links if viewing the project as a platform admin (#1054) @Pezmc
 - /s/notifictions/notifications/ (#1052) @Pezmc
 - No only tests (#1051) @Steve-Mcl
 - Handle postgres constraint errors with username/email uniqueness (#1050) @knolleary
 - Add Postgres DB config options (#1047) @hardillb
 - Add note on db migration considerations (#1036) @knolleary

#### 0.10.0: Release

 - Correct IP address
 - Remove invitations for deleted teams (#942)
 - Update forge-ui-components to latest (#1032) @knolleary
 - Document minimal billing unit (#1030) @sammachin
 - Don't show JSON error on double email verification (#1026) @hardillb
 - Guard against an empty template when handling httpNodeAuth (#1023) @knolleary
 - Add httpNodeAuth settings (#965) @hardillb
 - Add Project Nodes docs to main documentation (#1002) @sammachin
 - Fix typo in template description (#1022) @hardillb
 - Update docs for static outbound ips (#1020) @robmarcer
 - Update rbac table to include viewer (#1009) @knolleary
 - Standardise format of error responses (#1021) @knolleary
 - Allow access to team settings if billing is not configured (#1017) @knolleary
 - Prompt for license Limits (#1016) @hardillb
 - Revert userLimit on default TeamType (#1019) @knolleary
 - Remove /api/v1/user/projects end-point as it is unused (#1014) @knolleary
 - Refresh admin user list after expiring password (#1015) @knolleary
 - Ensures stack/template are preselected on Create Project page (#1013) @knolleary
 - Add 'leave team' option on User Settings/Teams view (#1010) @knolleary
 - First pass at Coupon support (#1006) @hardillb
 - Include role in Team Invitation (#1008) @knolleary
 - Extend login sessions to one week with idle timeout (#1001) @knolleary
 - Add Viewer role (#1005) @knolleary
 - Introduce hasPermission mixin for checking rbac in frontend (#1004) @knolleary
 - Add UI components to disable Welcome Tours (#996) @hardillb
 - Prevent admin from suspending themselves (#997) @hardillb
 - Add case-insensitive unique constraint on User.username and email (#993) @knolleary
 - Log suspended users out of projects (#985) @hardillb
 - Ensure team is set when loading device page (#992) @knolleary
 - Add link to dev env setup to theContributing guide (#976) @hardillb
 - Add notice about user limit in team invite dialog (#980) @knolleary
 - fix User Edit dialog wont close & save btn state (#984) @Steve-Mcl
 - Ensure admins have team-owner level access to all views in frontend (#991) @knolleary
 - Add ability to update T+Cs to cause a re-review / reaccept for users (#951) @Steve-Mcl
 - Remove tests and output from npm package (#981) @hardillb
 - Add billing to device lifecycle (#970) @knolleary
 - Update vue component name for NoVerifiedEmail.vue (#977) @ArshErgon
 - Fix Team license tests on postgres (#975) @knolleary
 - Add full path to invitations on email (#954) @sammachin
 - Basic user suspend (#945) @hardillb
 - Prevent last admin being removed from platform (#967) @Steve-Mcl
 - remove .only from tests (#969) @Steve-Mcl
 - Add TeamType.properties.deviceLimit to restrict devices in team (#964) @knolleary
 - Add device count and project counts by type to admin (#949) @Pezmc
 - Add cypress screenshots output to gitignore (#962) @knolleary
 - ensure project name starts with alpha char (#958) @Steve-Mcl
 - Enforce limits on number of teams that can be created (#959) @knolleary
 - Apply license limits to number of users (#950) @knolleary
 - Add limits to license and enforce Project limit (#947) @knolleary
 - Set starter team userLimit to 3 and enforce member limits in api (#946) @knolleary

#### 0.9.0: Release

 - Properly report stack delete error messages (#934) @knolleary
 - Inflate team object with TeamType for updating billing (#933) @hardillb
 - Ensure device action options are shown on project/devices view for owner (#932) @knolleary
 - fix migration SQL for postgres (#931) @Steve-Mcl
 - Permit `a-zA-Z-` in project name (#925) @Steve-Mcl
 - permit custom dashboard path to be set from FF (#926) @Steve-Mcl
 - Limit tests to only run when changes to code (#889) @hardillb
 - Update Stack Deleting Error Text (#927) @sammachin
 - adjust visibility and operations to match agreed RBACs (#920) @Steve-Mcl
 - Fix Stack update logic (#928) @sammachin
 - Hide loading graphic when project is susspended and viewing logs (#924) @hardillb
 - Limit password length to 1024 chars (#922) @hardillb
 - docs: Explain how to push images to docker (#919) @ZJvandeWeg
 - docs: Fix minor issues on the k8s install docs (#918) @ZJvandeWeg
 - Fix creating teams when billing enabled (#916) @hardillb
 - docs: Update RBAC table (#865) @Steve-Mcl
 - Map properties for Snapshot component (#908) @joepavitt
 - Change .unit_price property to .price (#914) @joepavitt
 - Make team row selectable (#913) @joepavitt
 - Add migration guide (#897) @sammachin
 - add default crt & key instructions (#909) @sammachin
 - 
 - 
 - 
 - 
 - 
 - 
 - 
 - Remove redundant test: calls that were not required in final Cypress solution (#895) @joepavitt
 - 
 - 
 - 
 - 
 - 
 - 
 - 
 - 
 - 
 - Select Tiles for "Create Project" & "Admin > Project Types" (#846) @joepavitt
 - 
 - 

#### 0.8.0: Release

 - Update 06-story.yml
 - Add upgrading notes for broker and project nodes (#848) @knolleary
 - Fix loading of default team when logging in (#847) @knolleary
 - Bump sqlite node to 5.0.8 (#707) @hardillb
 - Ensure expired password users cannot access API (#842) @knolleary
 - Notify user of API errors (#845) @joepavitt
 - Fix docker run command (#840) @hardillb
 - Show username instead of ID in alert on removal (#834) @sammachin
 - docs: Add details on migrations for developers (#832) @ZJvandeWeg
 - Component Update: ff-data-table (#798) @joepavitt
 - add ACLs for project link-call responses (#838) @Steve-Mcl
 - Prevent user with unverified email from accessing API (#824) @knolleary
 - Remove all manual show/close logic for ff-dialog (now contained within the component) (#829) @joepavitt
 - Initial mqtt broker configuration docs (#804) @knolleary
 - Add basic helmet config (#823) @hardillb
 - Fix deprated funtion call (#828) @hardillb
 - Allow limited access to project list for anonymous (#820) @Steve-Mcl
 - Fix reply-already-sent error when auth fails on storage routes (#819) @knolleary
 - Added ff- prefix to reflect current filenames (#818) @Steveorevo
 - Handle "@submit" events on forms in dialog boxes (#811) @joepavitt
 - Add defaultTeam to User model and enable API to modify (#810) @knolleary
 - Update README.md (#812) @HaroldPetersInskipp
 - Wrap the "Home" view in a <main> in order to get cleaner styling (#809) @joepavitt
 - Update 06-story.yml (#797) @sammachin
 - Add details of setting logging level to the docs (#808) @hardillb
 - Warn if trying to login with email address (#799) @sammachin
 - Centralise how tests initialise Forge app (#805) @knolleary
 -  Allow http logging level to be set independently #802 (#803) @hardillb
 - Add comms (mqtt) component to forge platform (#706) @knolleary
 - Update stacks.md (#801) @sammachin
 - Restyle "Thank you" message when user signs up. (#792) @joepavitt
 - Remove catch all transition & assign component-level transition class (#796) @joepavitt
 - Fix logo height for safari (#793) @joepavitt
 - Prevent User and Team Name containing a URL (#788) @hardillb
 - Fix typo in change stack alert (#786) @knolleary
 - Modify CSS to prevent HTML hierarchy dependency & add --primary flag to SideNavigation.vue (#784) @joepavitt

#### 0.7.0: Release

 - Update contributing guide to point at dev-env (#768) @knolleary
 - Add basic README.md back to root of project (#767) @hardillb
 - Ensure stacks list is cleared when showing ProjectType dialog (#765) @knolleary
 - Ensure that history is present before checking last URL (#762) @joepavitt
 - Add test for handling invalid snapshot id in device checkin (#763) @hardillb
 - Do not include projectType properties when editing projectType (#761) @knolleary
 - Fix CSS alignment in team selection (#753) @joepavitt
 - Start of K8s install instructions (#702) @hardillb
 - Avoid flicker of auditlog loading placeholder when refreshing project (#752) @knolleary
 - Add Project Types, Stack Versioning and Upgrading to docs (#750) @knolleary
 - Device page backend (#734) @hardillb
 - Add Function node exteral modules list (#749) @hardillb
 - Notify user if a new stack version is available (#744) @knolleary
 - Notifications (#720) @joepavitt
 - Add ProjectType (#739) @knolleary
 - Update language about `domain` and `base_url` (#740) @hardillb
 - 616 team selection (#748) @joepavitt
 - Fix next bill date (#747) @sammachin
 - Initial theming support (#613) @Steve-Mcl
 - docs: Initial copy around teams and their members (#741) @ZJvandeWeg
 - Toast Alerts (#713) @joepavitt
 - if log msg is object then stringify it first (#737) @sammachin
 - Add stack versioning apis and admin ui (#725) @knolleary
 - initial rollback support (#730) @Steve-Mcl
 - Add custom-built Projects icon (#715) @joepavitt
 - Fix link (#728) @sammachin
 - docs: Cannot update base_url (#726) @sammachin
 - Stop execes oauth logging (#724) @hardillb
 - Ensure the team_slug is set correctly when routing after settings update (#721) @joepavitt
 - Add optional support for running tests against postgres (#719) @knolleary
 - Use require.resolve to find vue in webpack config (#717) @knolleary
 - Admin version (#711) @sammachin
 - Docs readme (#709) @sammachin
 - Add `mqtt` and `broker` to banned project names (#712) @hardillb
 - Nested Sidebar (#701) @joepavitt
 - docs: Add more links to install devices (#708) @ZJvandeWeg
 - Fix for Device unable to checkin (#696) @hardillb
 - Ensure request has teamMembership attached for device api reqs (#688) @knolleary

#### 0.6.0: Release

 - Add admin endpoint to list db migrations
 - Add devices and snapshots to concepts docs (#664) @knolleary
 - Improve Device Credentials dialog ux (#678) @knolleary
 - Only show Device Loading on initial page load (#675) @knolleary
 - Handle a device that reports an invalid snapshot id (#679) @knolleary
 - Override default Device.getAccessToken to pass id as string (#677) @knolleary
 - Fix axios network error detection (#676) @knolleary
 - Fix device queries for postgres (#672) @knolleary
 - Allow a stack-less project have a stack applied (#671) @knolleary
 - Update the min required version of forge-ui-components (#668) @joepavitt
 - Loading component displayed when loading data from API (#656) @joepavitt
 - Increase default api timeout to 30s (#670) @knolleary
 - Enable device feature by default (#667) @knolleary
 - Update dependencies and fix test runners (#665) @knolleary
 - Fix loading logic on stack create dialog (#659) @knolleary
 - Map FlowForge logout to nodered auth/revoke (#643) @Steve-Mcl
 - Better handle billing errors whilst deleting projects (#663) @knolleary
 - Fix db migrations (#661) @knolleary
 - Add admin-only endpoint to dump database schema (#660) @knolleary
 - Remove default error for password field & restyle disabled primary btn for box layout (#652) @joepavitt
 - Show loading graphic when button actions taking place. (#650) @joepavitt
 - Remove image on server-offline page (#651) @joepavitt
 - Fix frontend team api test (#645) @knolleary
 - Improve docs for first time developer setup (#623) @Steve-Mcl
 - Frontend Unit Testing (#627) @joepavitt
 - Standardise on SectionTopMenu for project header element (#637) @knolleary
 - Fix device live endpoint to handle null snapshot (#644) @knolleary
 - Add audit log events for snapshots and devices (#639) @knolleary
 - Add device state in dashboard with periodic refresh (#640) @knolleary
 - Add devices/projectSnapshots/stacks/templates counts to telemetry ping (#641) @knolleary
 - Add project version info to Project overview (#642) @knolleary
 - docs: Start admin user management documentation (#628) @ZJvandeWeg
 - Add description to snapshots and improve UX (#634) @knolleary
 - Add forgeURL to downloaded credentials file (#638) @hardillb
 - Add exportCredentials function on Project controller to handle re-encryption (#630) @knolleary
 - Correct minor typos (#631) @Steve-Mcl
 - Dont clear env vars when setting a regular setting (#635) @Steve-Mcl
 - Ensure deviceLive endpoints are accessed by valid Device Token (#629) @knolleary
 - Fix merge error in device model (#624) @knolleary
 - Add live device endpoints (#618) @knolleary
 - Add ProjectSnapshots (#603) @knolleary
 - Auto generate credential secret for NR project to remove warnings in log (#604) @Steve-Mcl
 - Revert debugging line (v-if="offline") (#620) @joepavitt
 - Change input type to "password" for signup (#619) @joepavitt
 - docs: Link to change stack docs (#617) @ZJvandeWeg
 - Rebrand 404 (#611) @joepavitt
 - Rebrand offline (#610) @joepavitt
 - Add support for Lottie animations & add white/black loading animations (#609) @joepavitt
 - Add missing steps to dev:local (#588) @Steve-Mcl
 - fix start-watch npm script (#605) @Steve-Mcl
 - Add Shebang to install-stack.js (#581) @hardillb
 - Add recomended minimum memory to localfs stack doc (#584) @hardillb
 - Add cross-env to support development in other OS (#585) @Steve-Mcl
 - docs: Update codeblock names (#582) @ZJvandeWeg

#### v0.5.0: Release

 - Fix stack installer (#571) @hardillb
 - Ensure correct stack is preselected when copying project (#570) @knolleary
 - Add click-outside directive to team switcher to ensure it closes (#569) @knolleary
 - Ensure latest forge-ui-components is pulled in (#567) @knolleary
 - Update "Please provide payment details" page (#566) @joepavitt
 - Allow stack properties to have descriptions (#565) @knolleary
 - Encode palette.denyList as an array rather than string (#562) @knolleary
 - change install-stack to node script for cross-dev (#561) @Steve-Mcl
 - Branding updates & fix update expired password routing after success (#564) @joepavitt
 - Allow admin to delete users (#555) @knolleary
 - Allow Admin to limit what nodes can be installed (#558) @hardillb
 - Rebrand Dialog Boxes (#556) @joepavitt
 - Add project export and duplicate options (#547) @knolleary
 - Initial Device support (#535) @knolleary
 - Add missing audit log (#548) @hardillb
 - Hide projectCount from none admin users (#549) @hardillb
 - 523 platform usage tracking (#537) @joepavitt
 - Rework sidebar for "Project" view to show nesting within Team. (#545) @joepavitt
 - Only render side content if team available on create team page (#538) @joepavitt
 - fix links on workflows (#544) @sammachin
 - Change back button for Team Create page (#542) @knolleary
 - Refactor /ee/features endpoint to be included in /api/v1/settings (#540) @knolleary
 - Fix Admin Create User page layout (#541) @knolleary
 - Remove Roles import (#532) @joepavitt
 - Use Platform admin status, not team admin status (#531) @joepavitt
 - Add 'ff-view' container to control content scroll (#525) @joepavitt
 - Ensure user is Admin, before adding "Admin Settings" nav option (#527) @joepavitt
 - Rebrand - Stage 1 (#521) @joepavitt
 - Allow admin users to access team membership management options (#493) @knolleary
 - Convert figma to mermaid (#509) @hardillb
 - Fix the Create Project button on Team/Projects page (#494) @hardillb
 - Add SSL instructions for Docker (#508) @sammachin
 - Limit access to Project Settings (#495) @hardillb
 - Another Stripe typo (#491) @hardillb
 - Fix none pluralised Stripe API endpoint (#488) @hardillb
 - Add note about updating VIRTUAL_HOST in config (#486) @hardillb
 - Fix `stripe.invoice` should be `stripe.invoices` (#484) @hardillb

#### 0.4.0: Release

 - Timezone support for Node-RED (#452) @PLCMercenary
 - Clean when billing enabled & permission checks are done (#478) @joepavitt
 - Don't 404 for admin users when accessing billing info (#479) @hardillb
 - Add option to use existing stack as a base to fill out the form (#477) @joepavitt
 - Add a $1 charge when setting up team billing (#476) @hardillb
 - docs for 0.4 (#475) @sammachin
 - Don't try and send negative project count to Stripe (#472) @hardillb
 - License expiry date incorrect (#471) @PLCMercenary
 - Reformat team name displays in confirmation dialogs (#474) @joepavitt
 - Only show the 'confirm additional charges' message if billing feature is enabled (#473) @joepavitt
 - frontend: Admin created users default to no team (#469) @ZJvandeWeg
 - made the team name block (#444) @fakoredeDamilola
 - added additional steps to setup dev environemnt (#470) @sammachin
 - Allow a project stack to be changed (#437) @knolleary
 - Add unit tests for team member/invite apis (#467) @knolleary
 - Update project automation (#462) @knolleary
 - Add requirement for price acknowledgement when creating project (#458) @joepavitt
 - Fix 404 in Stripe Billing callback for charge.failed (#456) @hardillb
 - Fix runtime compilation of vue components (#461) @knolleary
 - Update LocalFS install instructions (#432) @hardillb
 - Add dynamic page title via router-view meta data (#445) @joepavitt
 - Add in T&Cs options in Admin Panel (#443) @joepavitt
 - Use stripe id not the sequize id (#440) @hardillb
 - add link to Cloud to index (#441) @sammachin
 - Proper fix for project billing metadata (#436) @hardillb
 - Ensure async billing call errors are handled (#433) @knolleary
 - Add support for Environment Variables in Project Templates (#426) @knolleary
 - Add project meta data to the Subscription (#425) @hardillb
 - add docs for ff.cloud & billing (#374) @sammachin
 - Fix verbose logging from auth routes (#418) @hardillb
 - Fix displaying current bill status (#417) @hardillb
 - Fix existing team billing setup (#415) @hardillb
 - Include forge-ui-components in Setup app (#412) @joepavitt
 - Add nyc for code coverage reporting (#400) @knolleary
 - Add ui-components to dev:local task (#410) @knolleary
 - Fix cancel/create button alignment on Create Template page (#408) @joepavitt
 - Fix dev:local task to setup nr-launcher symlinks (#403) @knolleary
 - Add tests for the Storage API (#401) @hardillb
 - Add docs about setting up local build. (#399) @hardillb
 - Update eslint rules to include .vue files in build. (#396) @joepavitt
 - Switch <button> and <input type="text"/> elements to use forge-ui-components (#395) @joepavitt
 - Install stack script (#389) @hardillb
 - Set up local development (#388) @hardillb
 - 362 vue linting (#386) @joepavitt


#### 0.3.0: Release

 - Round down to whole seconds (#375) @hardillb
 - Add Validation to project names (#350) @hardillb
 - Add stack/template info to docs (#369) @knolleary
 - Fix getter for Project.url (#373) @hardillb
 - Add id column (styled subtly as to not distract) (#367) @joepavitt
 - Update license to cover EE components (#368) @knolleary
 - Implement password reset (#365) @hardillb
 - Add production license keys (#364) @knolleary
 - Link button to the teamApi removeteamInvitation method (#361) @joepavitt
 - Introduce Project Templates (#352) @knolleary
 - Update link params for Team object (#360) @joepavitt
 - Fix migrations with PostgreSQL (#358) @hardillb
 - 347 block project rename (#356) @joepavitt
 - Frontend Billing (#346) @joepavitt
 - Backend billing (#332) @hardillb
 - Add initial Project Stacks (#326) @knolleary
 - Allow logging level to be changed (#344) @hardillb
 - Signup flows (#336) @knolleary
 - Do proper check for valid invite on user registration (#335) @knolleary
 - default to "overview" of navigated to team. (#329) @joepavitt
 - Implement Container driver wrapper (#327) @hardillb
 - update favicon to match website (#328) @joepavitt
 - Update package-lock.json (#321) @hardillb
 - Automate npm publish on release (#322) @hardillb
 - Add instructions to upgrade from v0.1.0 to v0.2.0 (#320) @hardillb

#### 0.2.0: Release

 - Email Docs (#205)
 - Add host to config (#311) @knolleary
 - Update telemetry option wording & add std forge-link class (#304) @joepavitt
 - Update docs for telemetry feature (#303) @knolleary
 - Restore import following merge (#302) @knolleary
 - Fix path in installer zip (#293) @hardillb
 - Allow Admin to view all projects even if not a member (#297) @hardillb
 - Auto-accept pending invites when registering to the platform (#301) @knolleary
 - fix slug issue (#284) @sammachin
 - Fix 403 for node admin users creating projects (#292) @hardillb
 - Add link to project to download (#290) @hardillb
 - Docker docs (#265) @hardillb
 - Remove "itchy" from adjectives list (#276) @hardillb
 - Tidy up test close calls (#283) @knolleary
 - Add container driver shutdown hook (#281) @hardillb
 - Ensure tests close the app after each test to prevent hangs (#282) @knolleary
 - Add telemetry metrics component (#274) @knolleary
 - Fix startup error with uninitialised config (#267) @knolleary
 - Add migration framework for database (#263) @knolleary
 - Remove console.log from the storage library route (#262) @hardillb
 - Force teamId/ProjectId to a string (#261) @hardillb
 - Fix missing () on end of toString (#259) @hardillb
 - Update various deps to latest (#258) @knolleary
 - Fix build.yml to run a code build before test (#257) @knolleary
 - Refactor forge entry point to make it testable (#255) @knolleary
 - Allow changing the from address (#256) @hardillb
 - First pass at SES support (#254) @hardillb
 - Move initialisation of instanceId and add cookieSecret (#249) @knolleary
 - Move stub driver out of node_modules (#248) @knolleary
 - Introduce eslint standard and tidy up forge code base (#244) @knolleary
 - Check NodeJS version and log FF version (#243) @hardillb
 - Add engines section to package.json (#228) @hardillb
 - Add project automation workflow (#230) @knolleary
 - Update issues templates (#206) @knolleary
 - Fix install instructions (#201) @hardillb
