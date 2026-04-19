const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'public', '4_5949439825709899477 1.glb');

try {
  const fd = fs.openSync(filePath, 'r');
  const header = Buffer.alloc(20);
  fs.readSync(fd, header, 0, 20, 0);

  const magic = header.readUInt32LE(0);
  if (magic !== 0x46546c67) {
    throw new Error('Not a GLB file');
  }

  const version = header.readUInt32LE(4);
  const length = header.readUInt32LE(8);
  const jsonChunkLength = header.readUInt32LE(12);
  const jsonChunkType = header.readUInt32LE(16);

  console.log(`GLB Info: Version ${version}, Total Length: ${length}`);
  console.log(`JSON Chunk Length: ${jsonChunkLength}`);

  const jsonBuffer = Buffer.alloc(jsonChunkLength);
  fs.readSync(fd, jsonBuffer, 0, jsonChunkLength, 20);

  const gltf = JSON.parse(jsonBuffer.toString());

  console.log('--- Nodes (Top Level) ---');
  const nodes = gltf.nodes || [];
  console.log(nodes.map(n => n.name).filter(Boolean).slice(0, 30));

  console.log('--- Meshes ---');
  const meshes = gltf.meshes || [];
  console.log(meshes.map(m => m.name).filter(Boolean).slice(0, 30));

  if (gltf.scenes && gltf.scenes[0]) {
    console.log('--- Default Scene Nodes ---');
    console.log(gltf.scenes[0].nodes.map(idx => gltf.nodes[idx].name).filter(Boolean).slice(0, 30));
  }

  fs.closeSync(fd);
} catch (err) {
  console.error('Error inspecting GLB:', err);
}
