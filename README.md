# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<!-- CONTRIBUTIONS-GITLAB:START -->
## Contributeurs historiques GitLab

> Section générée depuis l’historique Git complet de `Eduka-front` : commits, branches et merges importés depuis GitLab/Git.

### Synthèse

- Projet : `Eduka Front`
- Commits analysés : `144`
- Branches analysées : `31`
- Merges détectés : `15`

### Qui a fait quoi

| Contributeur | Commits | Branches principales | Fonctionnalités principales | Merges |
|---|---:|---|---|---:|
| Julien TANGUY | `82` | `HEAD -> origin/main`, `develop`, `main`, `devops`, `debuggage`, `installation-cypress` | Authentification / rôles (54), Tests / Cypress (15), Utilisateurs / profils (9), CI/CD / Docker (3), Notifications (1) | `3` |
| Sylvain | `21` | `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main` | Authentification / rôles (21) | `3` |
| Ania Cousin | `18` | `tr-cablage-Login`, `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress` | Authentification / rôles (18) | `3` |
| yeslifeprod-rgb | `18` | `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main` | Authentification / rôles (18) | `3` |
| baptiste | `4` | `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main` | Authentification / rôles (4) | `2` |
| Ange-BC | `1` | `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main` | Authentification / rôles (1) | `1` |

### Branches et fonctionnalités

| Branche | Contributeurs principaux | Fonctionnalités dominantes | Merges |
|---|---|---|---:|
| `HEAD -> origin/main` | Julien TANGUY (81), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (111), Tests / Cypress (15), Utilisateurs / profils (9), CI/CD / Docker (3) | `15` |
| `develop` | Julien TANGUY (81), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (111), Tests / Cypress (15), Utilisateurs / profils (9), CI/CD / Docker (3) | `15` |
| `main` | Julien TANGUY (81), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (111), Tests / Cypress (15), Utilisateurs / profils (9), CI/CD / Docker (3) | `15` |
| `devops` | Julien TANGUY (77), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (111), Tests / Cypress (15), Utilisateurs / profils (5), CI/CD / Docker (3) | `15` |
| `debuggage` | Julien TANGUY (58), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (107), Utilisateurs / profils (5), CI/CD / Docker (3) | `15` |
| `installation-cypress` | Julien TANGUY (50), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (105), Utilisateurs / profils (2) | `15` |
| `tr-00-cablage-login` | Julien TANGUY (44), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (101) | `14` |
| `tr-000-dev_mapbox_card` | Julien TANGUY (34), Sylvain (21), yeslifeprod-rgb (18), Ania Cousin (13) | Authentification / rôles (91) | `14` |
| `recup-travail-by-julien` | Julien TANGUY (31), Sylvain (21), Ania Cousin (13), yeslifeprod-rgb (9) | Authentification / rôles (79) | `12` |
| `tr-cablage-Login` | Julien TANGUY (27), Sylvain (21), Ania Cousin (18), yeslifeprod-rgb (4) | Authentification / rôles (75) | `11` |
| `tr-238-front-home-page-teacher` | Julien TANGUY (27), Sylvain (21), Ania Cousin (13), yeslifeprod-rgb (4) | Authentification / rôles (70) | `11` |
| `trombinoscope-ecole` | Julien TANGUY (26), Ania Cousin (13), Sylvain (10), yeslifeprod-rgb (4) | Authentification / rôles (58) | `9` |
| `tr-112-formulaire_creation` | Julien TANGUY (21), Sylvain (10), Ania Cousin (7), yeslifeprod-rgb (4) | Authentification / rôles (47) | `6` |
| `tr-232-myEvents` | Sylvain (16), Julien TANGUY (15), Ania Cousin (7), yeslifeprod-rgb (4) | Authentification / rôles (47) | `6` |
| `tr-264-EditProfilBySchool-V2` | Julien TANGUY (14), Sylvain (10), yeslifeprod-rgb (9), Ania Cousin (7) | Authentification / rôles (45) | `6` |
| `tr-205-change-password` | Julien TANGUY (15), Sylvain (13), Ania Cousin (7), yeslifeprod-rgb (4) | Authentification / rôles (44) | `6` |
| `tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant` | Julien TANGUY (15), Sylvain (10), yeslifeprod-rgb (7), Ania Cousin (7) | Authentification / rôles (44) | `6` |
| `tr-132-front-chat` | Julien TANGUY (15), Sylvain (12), Ania Cousin (7), yeslifeprod-rgb (4) | Authentification / rôles (43) | `6` |
| `tr-112-PageEventPublic-Ilyes` | Julien TANGUY (15), Sylvain (10), Ania Cousin (7), yeslifeprod-rgb (5) | Authentification / rôles (42) | `6` |
| `tr-112-PageEventPublic` | Julien TANGUY (15), Sylvain (10), Ania Cousin (7), yeslifeprod-rgb (4) | Authentification / rôles (41) | `6` |
| `tr-264-EditProfilBySchool` | Julien TANGUY (13), Sylvain (10), Ania Cousin (7), yeslifeprod-rgb (4) | Authentification / rôles (39) | `6` |
| `tr-28-login` | Julien TANGUY (13), Sylvain (10), Ania Cousin (7), baptiste (4) | Authentification / rôles (35) | `5` |
| `tr-213-subscribe-parent/teacher` | Julien TANGUY (13), Sylvain (9), baptiste (4), Ange-BC (1) | Authentification / rôles (27) | `4` |
| `tr93-filtrer-les-evenements` | Julien TANGUY (11), baptiste (4) | Authentification / rôles (15) | `2` |
| `tr---265-rechercher-user` | Julien TANGUY (10), baptiste (4) | Authentification / rôles (14) | `2` |
| `tr-149-notifications` | Julien TANGUY (8), baptiste (4) | Authentification / rôles (11), Notifications (1) | `2` |
| `tr-214-subscribe-teacher` | Sylvain (6), Julien TANGUY (5) | Authentification / rôles (11) | `0` |
| `tr-215-subscribe-parents` | Julien TANGUY (5), Sylvain (4) | Authentification / rôles (9) | `0` |
| `tr-24-login` | Julien TANGUY (5), baptiste (4) | Authentification / rôles (9) | `2` |
| `tr-93-filtrer-les-evenements` | Julien TANGUY (5), baptiste (4) | Authentification / rôles (9) | `2` |
| `tr-70-homepage-school` | Julien TANGUY (5), Sylvain (3) | Authentification / rôles (8) | `0` |

### Merges détectés

| Date | Merge | Auteur | Branche source détectée | Message |
|---|---|---|---|---|
| 2024-07-02 | `63f9108` | Julien TANGUY | `tr-00-cablage-login` | Merge branch 'tr-00-cablage-login' into develop |
| 2024-06-12 | `ddcf01b` | yeslifeprod-rgb | `tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant` | Merge branch 'tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant' into develop |
| 2024-06-12 | `5cd4117` | yeslifeprod-rgb | `tr-112-PageEventPublic-Ilyes` | Merge branch 'tr-112-PageEventPublic-Ilyes' into develop |
| 2024-06-10 | `05ea046` | Julien TANGUY | `develop` | Merge branch 'develop' into recup-travail-by-julien |
| 2024-05-21 | `26d0e35` | Sylvain | `develop` | Merge branch 'develop' into tr-238-front-home-page-teacher |
| 2024-05-21 | `7f15e56` | Sylvain | `develop` | Merge branch 'develop' into tr-238-front-home-page-teacher |
| 2024-05-21 | `7dc25a8` | Julien TANGUY | `develop` | Merge branch 'develop' into trombinoscope-ecole |
| 2024-05-21 | `9c9d3ed` | Ania Cousin | `tr-83-PageParticipation` | Merge branch 'tr-83-PageParticipation' into 'develop' |
| 2024-05-19 | `6af6e1c` | Ania Cousin | `tr-97-ModifyProfil` | Merge branch 'tr-97-ModifyProfil' into 'develop' |
| 2024-04-30 | `bb6816b` | yeslifeprod-rgb | `develop` | Merge branch 'develop' into tr-264-EditProfilBySchool |
| 2024-04-30 | `3b06320` | Ania Cousin | `develop` | Merge branch 'develop' into tr-28-login |
| 2024-04-30 | `a5e08dd` | Sylvain | `develop` | Merge branch 'develop' into tr-213-subscribe-parent/teacher |
| 2024-04-30 | `cab60e1` | Ange-BC | `develop` | Merge branch 'develop' of https://git.alt-tools.tech/gptriome/front into develop |
| 2024-04-23 | `7282e04` | baptiste | `test_baptiste` | Merge branch 'test_baptiste' into 'main' |
| 2024-04-23 | `19b8157` | baptiste | `main` | Merge branch 'main' into 'test_baptiste' |

### Détail par contributeur

#### Julien TANGUY

- Commits : `82`
- Branches : `HEAD -> origin/main`, `develop`, `main`, `devops`, `debuggage`, `installation-cypress`, `tr-00-cablage-login`, `tr-000-dev_mapbox_card`, `recup-travail-by-julien`, `tr-238-front-home-page-teacher`
- Fonctionnalités : Authentification / rôles (54), Tests / Cypress (15), Utilisateurs / profils (9), CI/CD / Docker (3), Notifications (1)
- Merges :
  - `63f9108` — 2024-07-02 — `tr-00-cablage-login` — Merge branch 'tr-00-cablage-login' into develop
  - `05ea046` — 2024-06-10 — `develop` — Merge branch 'develop' into recup-travail-by-julien
  - `7dc25a8` — 2024-05-21 — `develop` — Merge branch 'develop' into trombinoscope-ecole
- Exemples de commits :
  - `c11fa49` — 2024-10-10 — mise a jour valeur profil — Utilisateurs / profils
  - `8c584d3` — 2024-10-10 — réalisation page détail parents — Utilisateurs / profils
  - `97bbb26` — 2024-10-10 — mise en place informations profil — Utilisateurs / profils
  - `c47baba` — 2024-10-09 — rooting profil page — Utilisateurs / profils
  - `be02c34` — 2024-10-08 — mise en place trombinoscope — Authentification / rôles

#### Sylvain

- Commits : `21`
- Branches : `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main`, `recup-travail-by-julien`, `tr-00-cablage-login`, `tr-000-dev_mapbox_card`, `tr-238-front-home-page-teacher`
- Fonctionnalités : Authentification / rôles (21)
- Merges :
  - `26d0e35` — 2024-05-21 — `develop` — Merge branch 'develop' into tr-238-front-home-page-teacher
  - `7f15e56` — 2024-05-21 — `develop` — Merge branch 'develop' into tr-238-front-home-page-teacher
  - `a5e08dd` — 2024-04-30 — `develop` — Merge branch 'develop' into tr-213-subscribe-parent/teacher
- Exemples de commits :
  - `e9bdfd6` — 2024-05-21 — coucou — Authentification / rôles
  - `82bb546` — 2024-05-17 — update pages componant — Authentification / rôles
  - `9c2aeef` — 2024-05-16 — home-page-teacher finished — Authentification / rôles
  - `246903f` — 2024-05-13 — porfilPage finished — Authentification / rôles
  - `489a304` — 2024-05-10 — task tr-232 almost finished — Authentification / rôles

#### Ania Cousin

- Commits : `18`
- Branches : `tr-cablage-Login`, `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main`, `recup-travail-by-julien`, `tr-00-cablage-login`, `tr-000-dev_mapbox_card`
- Fonctionnalités : Authentification / rôles (18)
- Merges :
  - `9c9d3ed` — 2024-05-21 — `tr-83-PageParticipation` — Merge branch 'tr-83-PageParticipation' into 'develop'
  - `6af6e1c` — 2024-05-19 — `tr-97-ModifyProfil` — Merge branch 'tr-97-ModifyProfil' into 'develop'
  - `3b06320` — 2024-04-30 — `develop` — Merge branch 'develop' into tr-28-login
- Exemples de commits :
  - `31d648c` — 2024-10-13 — Style Remove Child Button — Authentification / rôles
  - `6b92520` — 2024-10-13 — Implement Parent Profile in edition mode — Authentification / rôles
  - `3852210` — 2024-10-13 — Fix bug: Look accessToken from local rather than sessionStorage — Authentification / rôles
  - `3ade6a0` — 2024-10-13 — Set in place RoleBasedRoute — Authentification / rôles
  - `87c2958` — 2024-10-10 — Consume AuthLogin endPoint and store the token — Authentification / rôles

#### yeslifeprod-rgb

- Commits : `18`
- Branches : `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main`, `tr-00-cablage-login`, `tr-000-dev_mapbox_card`, `recup-travail-by-julien`, `tr-264-EditProfilBySchool-V2`
- Fonctionnalités : Authentification / rôles (18)
- Merges :
  - `ddcf01b` — 2024-06-12 — `tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant` — Merge branch 'tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant' into develop
  - `5cd4117` — 2024-06-12 — `tr-112-PageEventPublic-Ilyes` — Merge branch 'tr-112-PageEventPublic-Ilyes' into develop
  - `bb6816b` — 2024-04-30 — `develop` — Merge branch 'develop' into tr-264-EditProfilBySchool
- Exemples de commits :
  - `6df57bd` — 2024-06-12 — "to fix mapbox in eventprivatepage" — Authentification / rôles
  - `058228c` — 2024-06-12 — "to fix" — Authentification / rôles
  - `3eabefc` — 2024-06-12 — "to fix mapbox" — Authentification / rôles
  - `97998f1` — 2024-06-10 — "to fix" — Authentification / rôles
  - `ee6f97a` — 2024-06-05 — "lastEdit" — Authentification / rôles

#### baptiste

- Commits : `4`
- Branches : `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main`, `recup-travail-by-julien`, `tr---265-rechercher-user`, `tr-00-cablage-login`, `tr-000-dev_mapbox_card`
- Fonctionnalités : Authentification / rôles (4)
- Merges :
  - `7282e04` — 2024-04-23 — `test_baptiste` — Merge branch 'test_baptiste' into 'main'
  - `19b8157` — 2024-04-23 — `main` — Merge branch 'main' into 'test_baptiste'
- Exemples de commits :
  - `9ba7b4b` — 2024-04-23 — Update README.md — Authentification / rôles
  - `5d688d7` — 2024-04-23 — initial commit for test_baptiste branch — Authentification / rôles

#### Ange-BC

- Commits : `1`
- Branches : `HEAD -> origin/main`, `debuggage`, `develop`, `devops`, `installation-cypress`, `main`, `recup-travail-by-julien`, `tr-00-cablage-login`, `tr-000-dev_mapbox_card`, `tr-112-PageEventPublic`
- Fonctionnalités : Authentification / rôles (1)
- Merges :
  - `cab60e1` — 2024-04-30 — `develop` — Merge branch 'develop' of https://git.alt-tools.tech/gptriome/front into develop

<!-- CONTRIBUTIONS-GITLAB:END -->
