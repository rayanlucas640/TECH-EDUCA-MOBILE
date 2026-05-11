import {
  ScrollView,
  StyleSheet // Para aplicar estilo na página
  ,
 
 
 
  Text,
  TouchableOpacity,
  View
} from 'react-native'; // Importa os componentes View e Text do React Native
 
export default function Index() { // Define e exporta o componente principal da tela
  return(
    <ScrollView>
      {/* ======= TOPO (HEADER) ======= */}
      {/* ======= Área de cabeçalho com logo e menu ========= */}
      <View style={styles.topo}>
        {/* Logo do sistema  */}
        <Text style={styles.logo}>TechEduca</Text>
     
        {/*  Menu de navegação  */}
      <View style={styles.menu}>
        <Text style={[styles.menuItem, styles.ativo]}> Início </Text>  {/* ======= Item ativo ========= */}
        <Text style={styles.menuItem}> Sobre </Text>
        <Text style={styles.menuItem}> Contato </Text>
       
     
        {/* Botão de login */}
    <TouchableOpacity style={styles.btnLogin}>
      <Text style={styles.textoBotao}>Login</Text>
    </TouchableOpacity>
 
      </View>
    </View>
 
    {/* ======= HERO ======= */}
    {/*  Seção principal (banner inicial)  */}
    <View style={styles.hero}>
      <View style={styles.heroContent}>
      <Text style={styles.heroTitulo}>
        {/* Título principal*/}
        Formação em Tecnologia para o mercado real
      </Text>
        {/* Descrição */}
      <Text style={styles.descricao}>
        Aprenda desenvolvimento web, lógica e banco de dados
      </Text>
        {/* ======= Aviso sobre login ========= */}
      <Text style={styles.avisoLogin}>
        Para visualizar os cursos, é necessário fazer Login
      </Text>
 
        {/* ======== Botão principal ========= */}
      <TouchableOpacity style={styles.btnPrimario}>
        <Text>Fazer Login</Text>
      </TouchableOpacity>
        {/* ======= Botão secundário ========= */}
      <TouchableOpacity style={styles.btnSecundario}>
      <Text>Fale Conosco</Text>
      </TouchableOpacity>
 
      </View>
    </View>
 
    {/* ====== DESTAQUES =======*/}
    {/* Seção com benefícios de plataforma */}
    <View style={styles.destaques}>
     <View style={styles.container}>
      {/* Título da seção */}
      <Text style={styles.tituloDestaque}>Por que estudar na TechEduca?</Text>
 
      <View style={styles.cards}>
 
      {/* Lista dos cards */}
 
      {/* Card 1 */}
    <View style={styles.card}>
      <Text style ={styles.cardTitulo}>Projetos Reais</Text>
      <Text style={styles.cardDescricao}>
        Você desenvolve sites com base em situações profissionais
      </Text>
    </View>
      {/* Card 2 */}
    <View style={styles.card}>
      <Text style ={styles.cardTitulo}>Materiais Didáticos</Text>
      <Text style={styles.cardDescricao}>
        Conteúdos e exercícios práticos
      </Text>
    </View>
      {/* Card 3 */}
    <View style={styles.card}>
      <Text style ={styles.cardTitulo}>Suporte do Instrutor</Text>
      <Text style={styles.cardDescricao}>
        Acompanhamento durante todo o processo
      </Text>
    </View>
 
    {/* RODAPÉ */}
    {/* ======= Parte final da página ========= */}
    {/* Parte final da página */}
    <View style={styles.rodape}>
      {/* Texto de direitos autorais */}
      <Text style={styles.textoRodape}> 2026 TechEduca. Todos os Direitos Reservados</Text>
      {/* Links de contato */}
      <Text style={styles.linkRodape}>Entre em contato</Text>
    </View>
   
    </View>
    </View>
    </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create(
  {
    topo: {
      backgroundColor: '#1a4db3',
      padding:20,
      alignItems: 'center',
      gap: 10,
    },
 
    logo : {
      color: '#ffffff',
      fontSize:24,
      fontWeight: 'bold'
    },
 
    menu: {
      marginTop: 10,
      alignItems: 'center',
      gap: 8
    },
 
    menuItem: {
      color: '#ffffff',
      fontWeight: 'bold'
    },
 
    ativo: {
      color: '#ff6a00'
    },
 
    btnLogin: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 10
    },
   
    hero: {
      backgroundColor: '#ffffff',
      textAlign: 'center',
      padding: 30
    },
 
    heroContent: {
      alignItems: 'center'
    },
 
    heroTitulo: {
      fontSize: 28,
      color: '#1a4db3',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10
    },
 
    avisoLogin: {
      fontSize: 16,
      color: '#222',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 20
    },
 
    btnPrimario: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 8,
      textDecorationLine: 'none',
      marginTop: 10
    },
 
    btnSecundario: {
      backgroundColor: '#ffffff',
      color: '#1a4db3',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 8,
      borderColor: '#1a4db3',
      borderWidth: 2,
      textDecorationLine: 'none',
      marginTop: 10
    },
 
    textoBotao: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center'
    },
 
    descricao: {
      color: '#222',
      fontSize: 28,
      textAlign: 'center',
      lineHeight: 25,
      marginBottom: 10
    },
 
    destaques: {
      padding: 20
    },
 
    container: {
      padding: 20
    },
 
    cards: {
      marginTop: 20
    },
 
    card: {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 8,
      marginBottom: 10,
      elevation: 3,
      boxShadow: '#222'
    },
 
    cardTitulo: {
      color: '#1a4db3',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8
    },
 
    cardDescricao: {
      color: '#222',
      fontSize: 15,
      textAlign: 'center',
      lineHeight: 22
    },
 
    rodape: {
      backgroundColor: '#1a4db3',
      padding: 20,
      textAlign: 'center'
    },
 
    textoRodape: {
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: 8
    },
 
    linkRodape: {
      color: '#ff6a00',
      fontWeight: 'bold',
      textDecorationLine: 'none'
    },
 
    tituloDestaque: {
      color: '#1a4db3',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    },
   
  }
)
 