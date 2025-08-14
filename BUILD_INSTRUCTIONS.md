# Instrucciones para generar APK de Android

## Configuración completada

✅ **Expo eliminado** - Se removieron todas las dependencias de Expo
✅ **React Native CLI configurado** - Se configuró para desarrollo nativo de Android  
✅ **Backend actualizado** - Apunta ahora a `http://192.168.7.26:4000`
✅ **Configuración Android** - Estructura completa de proyecto Android creada
✅ **Keystore generado** - Certificado de depuración para firmar APKs

## Comandos disponibles para APK

### 1. Instalar dependencias
```bash
npm install
```

### 2. Generar APK de debug
```bash
npm run build:android-debug
```

### 3. Generar APK de release (producción)
```bash
npm run build:apk
```

### 4. Limpiar build anterior
```bash
npm run clean:android
```

### 5. Ejecutar en dispositivo/emulador
```bash
npm run android
```

## Ubicación de APKs generados

- **Debug APK**: `android/app/build/outputs/apk/debug/app-debug.apk`
- **Release APK**: `android/app/build/outputs/apk/release/app-release.apk`

## Configuración de red

La aplicación está configurada para conectarse al servidor en:
- **IP Principal**: `http://192.168.7.26:4000`
- **IPs anteriores comentadas** en `constants/constantes.js`

## Requisitos del sistema

- Node.js 16+
- Android SDK
- Java 11 o superior
- Gradle (incluido en el proyecto)

## Notas importantes

1. El archivo `android/app/debug.keystore` se ha generado automáticamente
2. Para producción, considera crear un keystore dedicado
3. La configuración de red permite tráfico HTTP sin cifrar para desarrollo
4. Todos los archivos de Expo han sido removidos del proyecto