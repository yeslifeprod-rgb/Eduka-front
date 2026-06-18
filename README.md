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
## Contributions projet

Cette section résume simplement les contributions visibles dans l’historique GitLab importé sur GitHub. Elle est pensée pour une lecture recruteur : qui a contribué, sur quelles parties, et quels merges existent.

### Vue rapide

- Projet : **Eduka Front**
- Périmètre : **Interface web React / front-end applicatif**
- Historique analysé : **144 commits**
- Merges détectés : **15**

### Contributeurs

| Personne | Rôle visible dans le projet | Branches principales | Merges |
|---|---|---|---:|
| Julien TANGUY | Front-end principal : pages, parcours utilisateur, intégration UI et évolutions fonctionnelles. | `main`, `develop`, `devops`, `debuggage` | `3` |
| Sylvain | Fonctionnalités front : écrans, composants et améliorations applicatives. | `main`, `debuggage`, `develop`, `devops` | `3` |
| Ania Cousin | UI, corrections et participation aux fonctionnalités front. | `main`, `tr-cablage-Login`, `debuggage`, `develop` | `3` |
| yeslifeprod-rgb | Documentation, mise en forme GitHub et maintenance du dépôt. | `main`, `debuggage`, `develop`, `devops` | `3` |
| baptiste | Support front : intégration, ajustements et maintenance. | `main`, `debuggage`, `develop`, `devops` | `2` |
| Ange-BC | Contribution ponctuelle front. | `main`, `debuggage`, `develop`, `devops` | `1` |

### Fonctionnalités / branches clés

| Branche | Fonctionnalité lisible | Contributeurs principaux |
|---|---|---|
| `develop` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `devops` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `debuggage` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `installation-cypress` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `tr-00-cablage-login` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `tr-000-dev_mapbox_card` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `recup-travail-by-julien` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |
| `tr-cablage-Login` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |
| `tr-238-front-home-page-teacher` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |
| `trombinoscope-ecole` | Authentification et rôles | Julien TANGUY, Ania Cousin, Sylvain |
| `tr-112-formulaire_creation` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |
| `tr-232-myEvents` | Authentification et rôles | Sylvain, Julien TANGUY, Ania Cousin |
| `tr-264-EditProfilBySchool-V2` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `tr-205-change-password` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |
| `tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant` | Authentification et rôles | Julien TANGUY, Sylvain, yeslifeprod-rgb |
| `tr-132-front-chat` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |
| `tr-112-PageEventPublic-Ilyes` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |
| `tr-112-PageEventPublic` | Authentification et rôles | Julien TANGUY, Sylvain, Ania Cousin |

### Merges importants

| Date | Auteur | Branche / sujet |
|---|---|---|
| 2024-07-02 | Julien TANGUY | `tr-00-cablage-login` |
| 2024-06-12 | yeslifeprod-rgb | `tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant` |
| 2024-06-12 | yeslifeprod-rgb | `tr-112-PageEventPublic-Ilyes` |
| 2024-06-10 | Julien TANGUY | `develop` |
| 2024-05-21 | Sylvain | `develop` |
| 2024-05-21 | Sylvain | `develop` |
| 2024-05-21 | Julien TANGUY | `develop` |
| 2024-05-21 | Ania Cousin | `tr-83-PageParticipation` |
| 2024-05-19 | Ania Cousin | `tr-97-ModifyProfil` |
| 2024-04-30 | yeslifeprod-rgb | `develop` |
| 2024-04-30 | Ania Cousin | `develop` |
| 2024-04-30 | Sylvain | `develop` |

> Note : les noms sont regroupés quand plusieurs identités Git correspondent à la même personne.
<!-- CONTRIBUTIONS-GITLAB:END -->
