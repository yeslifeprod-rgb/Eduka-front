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

> Note : les chiffres viennent de l’auteur Git enregistré dans l’historique. Une merge request GitLab ou un merge peut apparaître sous la personne qui a validé le merge, même si le travail vient d’une autre branche.

### Contributeurs

| Personne | Rôle visible dans le projet | Commits | Branches principales | Merges Git |
|---|---|---:|---|---:|
| Julien | Front-end principal : pages, parcours utilisateur, intégration UI et évolutions fonctionnelles. | `82` | `main`, `develop`, `devops`, `debuggage` | `3` |
| Sylvain | Fonctionnalités front : écrans, composants et améliorations applicatives. | `21` | `main`, `debuggage`, `develop`, `devops` | `3` |
| Ania | UI, corrections et participation aux fonctionnalités front. | `18` | `main`, `tr-cablage-Login`, `debuggage`, `develop` | `3` |
| Ilyes | Front-end / intégration : pages événement, choix enfant, maintenance et mise en forme GitHub. | `18` | `main`, `debuggage`, `develop`, `devops` | `3` |
| baptiste | Support front : intégration, ajustements et maintenance. | `4` | `main`, `debuggage`, `develop`, `devops` | `2` |
| Ange-BC | Contribution ponctuelle front. | `1` | `main`, `debuggage`, `develop`, `devops` | `1` |


### Merges Git détectés

| Date | Auteur | Branche / sujet |
|---|---|---|
| 2024-07-02 | Julien | `tr-00-cablage-login` |
| 2024-06-12 | Ilyes | `tr-278-PageEvènementPrivé/tr-125-ModalChoixEnfant` |
| 2024-06-12 | Ilyes | `tr-112-PageEventPublic-Ilyes` |
| 2024-06-10 | Julien | `develop` |
| 2024-05-21 | Sylvain | `develop` |
| 2024-05-21 | Sylvain | `develop` |
| 2024-05-21 | Julien | `develop` |
| 2024-05-21 | Ania | `tr-83-PageParticipation` |
| 2024-05-19 | Ania | `tr-97-ModifyProfil` |
| 2024-04-30 | Ilyes | `develop` |
| 2024-04-30 | Ania | `develop` |
| 2024-04-30 | Sylvain | `develop` |

> Note : les noms sont regroupés quand plusieurs identités Git correspondent à la même personne.
<!-- CONTRIBUTIONS-GITLAB:END -->
