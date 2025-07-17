# 🦸‍♀️🦸‍♀️🦸‍♀️🦸‍♀️🦸‍♀️ Projeto: Classe Heroi em JavaScript 🦸‍♀️🦸‍♀️🦸‍♀️🦸‍♀️🦸‍♀️

Este projeto é um exemplo simples de como **criar uma classe** em JavaScript com **construtor** e **método**, usando um personagem de jogo como exemplo!

---

## 📚 O que você vai aprender:

✅ Como criar uma **classe**  
✅ Como usar o **constructor**  
✅ Como criar um **método**  
✅ Como usar **condicionais (`if`/`else`)**  
✅ Como usar o **`this`** para acessar propriedades da classe

---

## 🧠 Entendendo a ideia

Imaginamos que temos heróis com diferentes **tipos** (guerreiro, mago, monge, ninja), e cada um tem um tipo de ataque diferente.  
Usamos uma **classe `Heroi`** para representar isso!

---

## 🛠️ Estrutura do Código

### 🔷 1. Criando a Classe

```javascript
class Heroi {
  constructor(name, age, kind) {
    this.name = name;
    this.age = age;
    this.kind = kind;
  }
```

🧾 O `constructor` é chamado quando criamos um novo herói. Ele recebe:
- `name` → nome do herói  
- `age` → idade  
- `kind` → tipo do herói (guerreiro, mago, etc)

---

### 🔷 2. Criando o Método `atacar()`

```javascript
atacar() {
  let strike;

  if (this.kind === "guerreiro") {
    strike = "espada";
  } else if (this.kind === "Mago") {
    strike = "magia";
  } else if (this.kind === "Monge") {
    strike = "artes marciais";
  } else if (this.kind === "Ninja") {
    strike = "shuriken";
  } else {
    strike = "um ataque indefinido";
  }

  console.log(`O ${this.kind} ${this.name} atacou usando ${strike}`);
}
```

🗡️ Aqui, o herói ataca com uma arma diferente dependendo do seu tipo.

---

### 🚀 Como usar?

```javascript
const heroi1 = new Heroi("Rodox", 38, "Ninja");
heroi1.atacar(); 
```

🖥️ **Saída esperada no console:**
```
O Ninja Rodox atacou usando shuriken
```

---

### 🎯 Exemplos de Heróis

```javascript
new Heroi("Arthur", 30, "guerreiro")   // espada 🗡️
new Heroi("Merlin", 150, "Mago")       // magia ✨
new Heroi("Lee", 25, "Monge")          // artes marciais 🥋
new Heroi("Rodox", 38, "Ninja")        // shuriken 🥷
```



